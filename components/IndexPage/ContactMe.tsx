import React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

export default function SomeThingsIveBuilt() {
  const { t } = useTranslation("contact-page")
  const [Name, setName] = React.useState("")
  const [Email, setEmail] = React.useState("")
  const [Message, setMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    // console.log('Sending');

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Message }),
    })
    // console.log({ res });
    setName("")
    setEmail("")
    setMessage("")
    setLoading(false)
    setSubmitted(true)
  }
  return (
    <motion.div
      className="mb-40 scroll-mt-40 px-4 transition-all duration-500 ease-in-out md:px-28"
      id="contact"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
        <h2 className="whitespace-nowrap text-primary">04. {t("contact")}</h2>
        <h3 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          {t("pageTitle")}
        </h3>
        <p className="mt-6 text-center text-base-content/60">
          {t("pageDescription")}{" "}
          <a
            href="mailto:juancamiloqhz@gmail.com"
            className="link-primary link"
          >
            juancamiloqhz@gmail.com
          </a>
          .
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex w-full max-w-lg flex-col sm:mt-10"
        >
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <div className="form-control mb-3 w-full sm:mb-4">
              <label htmlFor="name" className="label">
                <span className="label-text">{t("name")}</span>
              </label>
              <input
                className="input-bordered input w-full bg-base-200"
                name="name"
                id="name"
                type="text"
                value={Name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control mb-3 w-full sm:mb-4">
              <label htmlFor="email" className="label">
                <span className="label-text">{t("email")}</span>
              </label>
              <input
                className="input-bordered input w-full bg-base-200"
                name="email"
                id="email"
                type="email"
                value={Email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-control mb-3 w-full sm:mb-4">
            <label htmlFor="message" className="label">
              <span className="label-text">{t("message")}</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={Message}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="textarea-bordered textarea bg-base-200"
            />
          </div>
          <button
            type="submit"
            className={`btn-primary btn mt-4 w-full text-base xs:w-fit sm:mt-8${
              loading ? " loading" : ""
            }`}
          >
            {loading ? t("sendingMessage") : t("sendMessage")}
          </button>
          {/* {submitted ? alert('submitted') : ''} */}
          {submitted && (
            <div className="alert alert-success mt-6 shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{t("sendMessageSuccess")}</span>
              </div>
              <div className="flex-none">
                <button
                  type="button"
                  className="btn-ghost btn-sm btn-circle btn"
                  onClick={() => setSubmitted(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  )
}
