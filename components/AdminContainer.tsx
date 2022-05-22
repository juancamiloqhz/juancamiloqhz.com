import { useRouter } from 'next/router';
import Footer from './Footer';
import { AdminHeader } from './admin';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children, ...props }: ContainerProps) {
  const { locale, asPath } = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex flex-col justify-center p-6 md:px-8 bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}
