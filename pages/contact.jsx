import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

//Taken from https://greedytaker.in/nextjs/email-sending-contact-page-nextjs
export default function AboutPage() {
  const { t } = useTranslation('contact-page');
  const [submitted, setSubmitted] = useState(false);

  const Userdata = async (event) => {
    event.preventDefault();
    console.log('Sending');
    setSubmitted(true);

    let userdata = {
      Name: event.target.Name.value,
      Email: event.target.Email.value,
      Message: event.target.Message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    });
    console.log({ res });
  };
  return (
    <div className="page-container">
      <SEO
        title={t('pageTitle')}
        description={t('pageDescription')}
        schemaType="ContactPage"
      />
      <PageTitle>{t('pageTitle')}</PageTitle>
      <div>
        <form onSubmit={(e) => Userdata(e)} className="flex flex-col">
          <label htmlFor="Name">Name</label>
          <input name="Name" id="Name" type="text" required />
          <label htmlFor="Email">Email</label>
          <input name="Email" id="Email" type="email" required />
          <label htmlFor="Message">Message</label>
          <textarea id="Message" name="Message" required></textarea>
          <button type="submit">Send</button>
          {submitted == true ? alert('submitted') : ''}
        </form>
      </div>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'contact-page',
        'header',
        'footer',
      ])),
    },
  };
}
