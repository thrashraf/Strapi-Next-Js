import React from 'react';
import Navbar from './Nav/navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className='max-w-7xl m-auto px-10'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
