import { GetStaticProps } from 'next';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', [
        'contact-page',
        'header',
        'footer'
      ]))
    }
  };
};

//Taken from https://greedytaker.in/nextjs/email-sending-contact-page-nextjs
export default function AboutPage() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('contact-page');
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    console.log('Sending');
    // setSubmitted(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, Email, Message })
    });
    // console.log({ res });
    setName('');
    setEmail('');
    setMessage('');
    setLoading(false);
  };
  return (
    <Container
      title={t('pageTitle')}
      description={t('pageDescription')}
      schemaType="ContactPage"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {t('pageTitle')}
        </h1>
        <p className="mb-10">{t('pageDescription')}</p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="form-control w-full mb-4">
            <label htmlFor="name" className="label">
              <span className="label-text">{t('name')}</span>
            </label>
            <input
              className="input input-bordered w-full"
              name="name"
              id="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">{t('email')}</span>
            </label>
            <input
              className="input input-bordered w-full"
              name="email"
              id="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control w-full mb-4">
            <label htmlFor="message" className="label">
              <span className="label-text">{t('message')}</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered"
            />
          </div>
          <button type="submit" className="mt-8 btn btn-primary w-fit">
            {loading ? t('sendingMessage') : t('sendMessage')}
          </button>
          {/* {submitted == true ? alert('submitted') : ''} */}
        </form>
      </div>
    </Container>
  );
}
