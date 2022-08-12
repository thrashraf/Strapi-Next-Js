import React from 'react';

export const Form = ({ children, auth }) => {
  return (
    <form onSubmit={auth} className='flex flex-col pt-3 md:pt-8 md:px-[10%]'>
      {children}
    </form>
  );
};
