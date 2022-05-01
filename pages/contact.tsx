import { GetStaticProps } from 'next';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'contact-page',
        'header',
        'footer'
      ]))
    }
  };
};

//Taken from https://greedytaker.in/nextjs/email-sending-contact-page-nextjs
export default function AboutPage() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('contact-page');
  // const [submitted, setSubmitted] = useState(false);

  const UserData = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log('Sending');
    // setSubmitted(true);

    let userData = {
      Name: event.target.Name.value,
      Email: event.target.Email.value,
      Message: event.target.Message.value
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    // console.log({ res });
    event.target.Name.value = '';
    event.target.Email.value = '';
    event.target.Message.value = '';
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
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          {t('pageDescription')}
        </p>
        <form onSubmit={(e) => UserData(e)} className="flex flex-col w-full">
          <label htmlFor="Name" className="mb-4 flex-col flex">
            {t('name')}
            <input name="Name" id="Name" type="text" required />
          </label>
          <label htmlFor="Email" className="mb-4 flex-col flex">
            {t('email')}
            <input name="Email" id="Email" type="email" required />
          </label>
          <label htmlFor="Message" className="mb-4 flex-col flex">
            {t('message')}
            <textarea id="Message" name="Message" required></textarea>
          </label>
          <button type="submit" className="mt-6">
            {loading ? t('sendingMessage') : t('sendMessage')}
          </button>
          {/* {submitted == true ? alert('submitted') : ''} */}
        </form>
      </div>
    </Container>
  );
}
