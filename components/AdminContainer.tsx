import React from 'react';
import { AdminHeader } from './admin';
import Header from './Header';

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
