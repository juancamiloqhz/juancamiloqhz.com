import React from 'react';
import Header from '@/components/shared/Header';

// import { AdminHeader } from '../admin';

export default function Container({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {/* <AdminHeader /> */}
      <Header />
      {children}
    </div>
  );
}
