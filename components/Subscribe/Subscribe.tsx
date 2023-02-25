import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEmail = React.useRef<HTMLInputElement>(null);
  const inputName = React.useRef<HTMLInputElement>(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { t } = useTranslation('mailinglist');

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log({
      email: inputEmail.current?.value,
      name: inputName.current?.value,
    });
    // 3. Send a request to our API with the user's email address.
    // const res = await fetch('/api/subscribe', {
    //   body: JSON.stringify({
    //     email: inputEmail.current!.value
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST'
    // });

    // const { error } = await res.json();

    // if (error) {
    //   // 4. If there was an error, update the message in state.
    //   setErrorMessage(error);
    //   setLoading(false);

    //   return;
    // }

    // 5. Clear the input value and show a success message.
    // inputEmail.current!.value = '';
    // setMessage('success');
    setLoading(false);
  };

  const messageTxt = React.useMemo(() => {
    if (errorMessage) return errorMessage;
    if (message === 'success') {
      return t('success');
    }
    return t('noMessage');
  }, [message, t, errorMessage]);

  return (
    <form
      onSubmit={subscribe}
      className="flex w-full flex-col rounded-[var(--rounded-btn)] border border-base-content/20 bg-base-300 p-8 shadow-xl"
    >
      <h3 className="mb-2 font-serif text-4xl font-semibold">{t('title')}</h3>
      <p className="my-4 text-lg md:text-xl">{t('description')}</p>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="form-control w-full">
          <label className="label" htmlFor="name">
            <span className="label-text font-semibold">{t('name')}</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-bordered input w-full"
            placeholder="Juan"
            ref={inputName}
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="email-input">
            <span className="label-text font-semibold">{t('email')}</span>
          </label>
          <input
            type="email"
            id="email-input"
            name="email"
            className="input-bordered input w-full"
            placeholder="juan@website.com"
            ref={inputEmail}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className={`btn-outline btn-primary btn w-fit mt-6${
          loading ? ' loading' : ''
        }`}
      >
        {/* {loading ? `✨ ${t('subscribing')} 💌` : `✨ ${t('subscribe')} 💌`} */}
        {loading ? t('subscribing') : t('subscribe')}
      </button>
      <p className="mt-4 text-xs text-base-content/60">*{messageTxt}</p>
    </form>
  );
}
