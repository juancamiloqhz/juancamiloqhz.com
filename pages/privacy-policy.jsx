import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import PageTitle from '../components/common/PageTitle';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  const { t } = useTranslation('privacy-policy');
  return (
    <div className="page-container">
      <Head>
        <title>{t('pageTitle')} | JuanCamiloQHz</title>
      </Head>
      <PageTitle>{t('pageTitle')}</PageTitle>
      <div className="flex flex-col max-w-3xl mx-auto">
        <p>
          This privacy policy has been compiled to better serve those who are
          concerned with how their 'Personally Identifiable Information' (PII)
          is being used online. PII, as described in US privacy law and
          information security, is information that can be used on its own or
          with other information to identify, contact, or locate a single
          person, or to identify an individual in context. Please read our
          privacy policy carefully to get a clear understanding of how we
          collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>
        <h3>
          What personal information do we collect from the people that visit our
          blog, website or app?
        </h3>
        <p>
          When ordering or registering on our site, as appropriate, you may be
          asked to enter your name, email address or other details to help you
          with your experience.
        </p>
        <h3>When do we collect information?</h3>
        <p>
          We collect information from you when you register on our site,
          subscribe to a newsletter, fill out a form or enter information on our
          site.
        </p>
        <h3>How do we use your information?</h3>
        <p>
          We may use the information we collect from you when you register, make
          a purchase, sign up for our newsletter, respond to a survey or
          marketing communication, surf the website, or use certain other site
          features in the following ways:
        </p>
        <ul>
          <li>
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li>To improve our website in order to better serve you.</li>
          <li>
            To allow us to better service you in responding to your customer
            service requests.
          </li>
        </ul>
        <h3>How do we protect visitor information?</h3>
        <p>
          Our website is scanned on a regular basis for security holes and known
          vulnerabilities in order to make your visit to our site as safe as
          possible.
        </p>
        <h3>We use regular Malware Scanning.</h3>
        <p>
          Your personal information is contained behind secured networks and is
          only accessible by a limited number of persons who have special access
          rights to such systems, and are required to keep the information
          confidential. In addition, all sensitive/credit information you supply
          is encrypted via Secure Socket Layer (SSL) technology.
        </p>
        <p>
          We implement a variety of security measures when a user enters,
          submits, or accesses their information to maintain the safety of your
          personal information.
        </p>
        <p>
          All transactions are processed through a gateway provider and are not
          stored or processed on our servers.
        </p>
        <h3>Do we use 'cookies'?</h3>
        <p>
          Yes. Cookies are small files that a site or its service provider
          transfers to your computer's hard drive through your Web browser (if
          you allow) that enables the site's or service provider's systems to
          recognize your browser and capture and remember certain information.
          For instance, we use cookies to help us remember and process the items
          in your shopping cart. They are also used to help us understand your
          preferences based on previous or current site activity, which enables
          us to provide you with improved services. We also use cookies to help
          us compile aggregate data about site traffic and site interaction so
          that we can offer better site experiences and tools in the future.
        </p>
        <h3>We use cookies to:</h3>
        <ul>
          <li>Understand and save user's preferences for future visits.</li>
          <li>
            Compile aggregate data about site traffic and site interactions in
            order to offer better site experiences and tools in the future.
          </li>
          <li>Understand and save user's preferences for future visits.</li>
          <li>
            Compile aggregate data about site traffic and site interactions in
            order to offer better site experiences and tools in the future.
          </li>
        </ul>
        <p>
          You can choose to have your computer warn you each time a cookie is
          being sent, or you can choose to turn off all cookies. You do this
          through your browser (like Internet Explorer) settings. Each browser
          is a little different, so look at your browser's Help menu to learn
          the correct way to modify your cookies.
        </p>
        <p>
          If you disable cookies off, some features will be disabled that make
          your site experience more efficient and some of our services will not
          function properly.
        </p>
        <h3>Third-party disclosure</h3>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          Personally Identifiable Information.
        </p>
        <h3>Third-party links</h3>
        <p>
          We do not include or offer third-party products or services on our
          website.
        </p>
        <h3>Google</h3>
        <p>
          Google's advertising requirements can be summed up by Google's
          Advertising Principles. They are put in place to provide a positive
          experience for users.
          https://support.google.com/adwordspolicy/answer/1316548?hl=en
        </p>
        <p>We use Google AdSense Advertising on our website.</p>
        <p>
          Google, as a third-party vendor, uses cookies to serve ads on our
          site. Google's use of the DART cookie enables it to serve ads to our
          users based on previous visits to our site and other sites on the
          Internet. Users may opt-out of the use of the DART cookie by visiting
          the Google Ad and Content Network privacy policy.
        </p>
        <h3>We have implemented the following:</h3>
        <ul>
          <li>Remarketing with Google AdSense</li>
          <li>Google Display Network Impression Reporting</li>
          <li>Demographics and Interests Reporting</li>
          <li>DoubleClick Platform Integration</li>
        </ul>
      </div>
    </div>
  );
}

PrivacyPolicy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'privacy-policy',
        'header',
        'footer',
      ])),
    },
  };
}
