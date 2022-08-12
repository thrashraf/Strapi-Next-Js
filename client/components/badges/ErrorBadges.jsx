import React from 'react';

const ErrorBadges = ({ mode }) => {
  return (
    <div
      className='bg-red-200 border-red-600 text-red-600 border-l-4 p-4'
      role='alert'
    >
      <p className='font-bold'>
        {mode === 'Sign In' ? 'Invalid Login' : 'Something went wrong'}
      </p>
      <p>Something not ideal might be happening.</p>
    </div>
  );
};

export default ErrorBadges;
