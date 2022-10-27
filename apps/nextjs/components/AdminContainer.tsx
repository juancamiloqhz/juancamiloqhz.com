import React from 'react';
import { AdminHeader } from './admin';

export default function Container({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex flex-col justify-center p-6 md:px-8 bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}
