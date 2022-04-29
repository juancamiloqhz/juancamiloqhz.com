import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <h1 className="text-center text-4xl md:text-6xl font-serif mt-6 md:mt-10 mb-14 md:mb-20 px-4">
          {/* {meta.title} */}
        </h1>
        <div className="prose dark:prose-invert  prose-sm md:prose-base prose-a:decoration-blue-600 mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
