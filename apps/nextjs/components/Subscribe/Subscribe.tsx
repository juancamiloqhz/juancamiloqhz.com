import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { t } = useTranslation('newsletter');

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
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
    inputEl.current.value = '';
    setMessage('success');
    setLoading(false);
  };

  const messageTxt = useMemo(() => {
    if (errorMessage) return errorMessage;
    if (message === 'success') {
      return t('success');
    }
    return t('noMessage');
  }, [message, t, errorMessage]);

  return (
    <form
      onSubmit={subscribe}
      className="border border-blue-200 dark:border-gray-800 p-4 md:p-5 lg:p-6 flex flex-col bg-blue-50 dark:bg-blue-opaque rounded w-full"
    >
      <p className="mb-2 text-gray-800 dark:text-gray-200">{t('title')}</p>
      <label htmlFor="email-input" className="flex flex-col relative">
        <input
          id="email-input"
          name="email"
          className="border-gray-200"
          placeholder="you@awesome.com"
          ref={inputEl}
          required
          type="email"
        />
        <button
          type="submit"
          className="self-end absolute right-2 m-0 top-1/2 -translate-y-1/2"
        >
          {/* {loading ? `✨ ${t('subscribing')} 💌` : `✨ ${t('subscribe')} 💌`} */}
          {loading ? t('subscribing') : t('subscribe')}
        </button>
      </label>
      <p className="mt-4 text-sm text-gray-800 dark:text-gray-200">
        {messageTxt}
      </p>
    </form>
  );
}
