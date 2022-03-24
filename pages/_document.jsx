import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="light">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <body className="bg-gray-50 dark:bg-[#171717] w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
