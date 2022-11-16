/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { useTranslation } from 'next-i18next';
import { format } from 'date-fns';
import { signIn, useSession, signOut } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';
import { FiGithub } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';

import fetcher from 'lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

function GuestbookEntry({ entry, user }: { entry: any; user: any }) {
  const [deleting, setDeleting] = React.useState(false);
  const { t } = useTranslation('guestbook-page');
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleting(true);

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });
    setDeleting(false);

    mutate('/api/guestbook');
  };

  return (
    <div className="flex flex-col space-y-2 mt-4 border p-4 border-base-content/30 rounded-[var(--rounded-btn)]">
      <p className="text-lg">{entry.body}</p>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-base-content/60">{entry.created_by}</p>
        <span className="">/</span>
        <p className="text-sm text-base-content/60">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>

        {user &&
          (entry.created_by === user.name ||
            user.name === 'Juan Camilo QHz') && (
            <>
              <span>/</span>
              <button
                className={`btn btn-error btn-outline btn-xs${
                  deleting ? ' loading' : ''
                }`}
                onClick={deleteEntry}
              >
                {t('delete')}
              </button>
            </>
          )}
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }: { fallbackData: any[] }) {
  const inputEl = React.useRef<HTMLTextAreaElement>(null);
  const { t } = useTranslation('guestbook-page');
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = React.useState<FormState>({ state: Form.Initial });
  const { data: entries }: any = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });

  const leaveEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current!.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current!.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: t('hooray')
    });
  };

  return (
    <>
      <div className="border border-base-content/20 p-8 flex flex-col rounded-[var(--rounded-btn)] w-full shadow-xl">
        <h5 className="text-xl md:text-2xl font-bold">{t('cardTitle')}</h5>
        <p className="mt-1">{t('cardDescription')}</p>
        {session && (
          <button
            type="button"
            onClick={() => signOut()}
            className="btn btn-primary btn-sm btn-outline mt-4"
          >
            {t('signOut')}
          </button>
        )}
        {!session && (
          <div className="grid lg:grid-cols-2 my-6 gap-3 lg:gap-6">
            <a
              href="/api/auth/signin/github"
              className="btn btn-primary btn-sm btn-outline gap-2"
              onClick={(e) => {
                e.preventDefault();
                signIn('github');
              }}
            >
              <FiGithub size={16} />
              {t('logInWithGitHub')}
            </a>
            <a
              href="/api/auth/signin/google"
              className="btn btn-primary btn-sm btn-outline gap-2"
              onClick={(e) => {
                e.preventDefault();
                signIn('google');
              }}
            >
              <FaGoogle size={16} />
              {t('logInWithGoogle')}
            </a>
          </div>
        )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <textarea
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              className="textarea textarea-bordered w-full"
              required
            />
            <button
              className={`btn btn-primary btn-outline px-6 mt-4 float-right${
                form.state === Form.Loading ? ' loading' : ''
              }`}
              type="submit"
            >
              {t('sign')}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-sm text-base-content/60">*{t('cardInfo')}</p>
        )}
      </div>
      <h4 className="mt-16 text-xl sm:text-2xl font-bold">
        {t('latest-messages')}
      </h4>
      <div className="mt-4 w-full space-y-8">
        {entries?.map((entry: any) => (
          <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
        ))}
      </div>
    </>
  );
}
