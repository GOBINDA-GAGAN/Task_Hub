import React from 'react';
import { Outlet } from 'react-router';
const AuthLayout = () => {
  return (
    <div className='flex min-h-svh h-screen w-full  items-center justify-center'>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
