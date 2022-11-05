import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = React.useRef<HTMLInputElement>(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { t } = useTranslation('newsletter');

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current!.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setErrorMessage(error);
      setLoading(false);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current!.value = '';
    setMessage('success');
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
      // className="border p-4 md:p-5 lg:p-6 flex flex-col rounded-lg w-full bg-gradient-to-tr from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]"
      className="border p-4 md:p-5 lg:p-6 flex flex-col rounded-lg w-full bg-gradient-to-tr from-primary via-secondary to-accent"
    >
      <p className="text-white mb-2">💌 {t('title')}</p>
      <label htmlFor="email-input" className="flex flex-col relative">
        <input
          id="email-input"
          name="email"
          className="input input-bordered w-full"
          placeholder="you@awesome.com"
          ref={inputEl}
          required
          type="email"
        />
        <div className="self-end absolute right-2 m-0 top-1/2 -translate-y-1/2 ">
          <button type="submit" className="btn btn-primary btn-sm">
            {/* {loading ? `✨ ${t('subscribing')} 💌` : `✨ ${t('subscribe')} 💌`} */}
            {loading ? t('subscribing') : t('subscribe')}
          </button>
        </div>
      </label>
      <p className="text-white mt-4 text-sm">{messageTxt}</p>
    </form>
  );
}

// background-color: #FF3CAC;
// background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
