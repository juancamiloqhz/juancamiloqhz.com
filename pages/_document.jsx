import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html className="dark">
        <Head />
        <body className="bg-white dark:bg-slate-900">
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}