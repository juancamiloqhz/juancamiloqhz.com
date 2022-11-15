import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export default function SomeThingsIveBuilt() {
  const { t } = useTranslation('contact-page');
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  // const [submitted, setSubmitted] = React.useState(false);
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
    <motion.div
      className="px-8 md:px-28 transition-all duration-500 ease-in-out mb-40 scroll-mt-40"
      id="contact"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-primary">04. Contact Me</h2>
        <h3 className="text-5xl font-bold mt-5">Get in touch</h3>
        <p className="text-center text-base-content/60 mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea optio
          quidem accusamus explicabo esse molestiae fuga reiciendis dolor
          ducimus temporibus. explicabo esse molestiae fuga reiciendis dolor
          ducimus temporibus.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg mx-auto mt-6 sm:mt-10"
        >
          <div className="form-control w-full mb-3 sm:mb-4">
            <label htmlFor="name" className="label">
              <span className="label-text">{t('name')}</span>
            </label>
            <input
              className="input input-bordered w-full bg-base-200"
              name="name"
              id="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full mb-3 sm:mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">{t('email')}</span>
            </label>
            <input
              className="input input-bordered w-full bg-base-200"
              name="email"
              id="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control w-full mb-3 sm:mb-4">
            <label htmlFor="message" className="label">
              <span className="label-text">{t('message')}</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered bg-base-200"
            />
          </div>
          <button
            type="submit"
            className="mt-4 sm:mt-8 btn btn-primary w-fit btn-outline"
          >
            {loading ? t('sendingMessage') : t('sendMessage')}
          </button>
          {/* {submitted == true ? alert('submitted') : ''} */}
        </form>
      </div>
    </motion.div>
  );
}
