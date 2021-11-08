const YEAR = new Date().getFullYear()

export default {
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'es', text: 'Espanol' },
    // { locale: 'zh', text: '中文' },
    // { locale: 'de', text: 'Deutsch' },
    // { locale: 'ar', text: 'العربية', direction: 'rtl' },
  ],
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Juan Camilo QHz.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
