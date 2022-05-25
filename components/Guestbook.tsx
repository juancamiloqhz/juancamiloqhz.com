/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useRef } from 'react';
import { format } from 'date-fns';
import { signIn, useSession, signOut } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';
import { useTranslation } from 'next-i18next';

function GuestbookEntry({ entry, user }) {
  const [deleting, setDeleting] = useState(false);
  const { t } = useTranslation('guestbook-page');
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();
    setDeleting(true);

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });
    setDeleting(false);

    mutate('/api/guestbook');
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full">{entry.body}</div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user &&
          (entry.created_by === user.name ||
            user.name === 'Juan Camilo QHz') && (
            <>
              <span className="text-gray-200 dark:text-gray-800">/</span>
              <button
                className="text-sm text-red-600 dark:text-red-400"
                onClick={deleteEntry}
              >
                {deleting ? <LoadingSpinner /> : t('delete')}
              </button>
            </>
          )}
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const { t } = useTranslation('guestbook-page');
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
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

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: t('hooray')
    });
  };

  return (
    <>
      <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-slate-800">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          {t('cardTitle')}
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          {t('cardDescription')}
        </p>
        {session && (
          <button
            type="button"
            onClick={() => signOut()}
            className="font-bold h-8 bg-gray-200 dark:bg-slate-500 hover:dark:bg-slate-600 text-gray-900 dark:text-gray-100 rounded"
          >
            {t('signOut')}
          </button>
        )}
        {!session && (
          <>
            <a
              href="/api/auth/signin/github"
              className="whitespace-nowrap flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-slate-500 hover:dark:bg-slate-600 text-gray-900 dark:text-gray-100 rounded"
              onClick={(e) => {
                e.preventDefault();
                signIn('github');
              }}
            >
              {t('logInWithGitHub')}
            </a>
            <a
              href="/api/auth/signin/google"
              className="whitespace-nowrap flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-slate-500 hover:dark:bg-slate-600 text-gray-900 dark:text-gray-100 rounded"
              onClick={(e) => {
                e.preventDefault();
                signIn('google');
              }}
            >
              {t('logInWithGoogle')}
            </a>
          </>
        )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              className="flex items-center justify-center absolute right-1 top-[50%] translate-y-[-50%] px-4 pt-1 m-0 font-medium h-8 rounded min-w-[8rem] w-fit"
              type="submit"
            >
              {form.state === Form.Loading ? <LoadingSpinner /> : t('sign')}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            {t('cardInfo')}
          </p>
        )}
      </div>
      <div className="mt-4 w-full space-y-8">
        {entries?.map((entry) => (
          <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
        ))}
      </div>
    </>
  );
}
