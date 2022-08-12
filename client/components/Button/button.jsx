import React from 'react';

export const Button = ({ label, loading }) => {
  return (
    <button className='mt-16 p-3 w-full bg-blue-500 rounded-md text-lg font-bold flex justify-center items-center'>
      {loading && (
        <img
          src='spinner.svg'
          className='mr-2 w-3 h-3  animate-spin  '
          alt='spinner'
        />
      )}

      {label}
    </button>
  );
};
