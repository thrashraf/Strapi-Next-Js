import React from 'react';

export const Tabs = ({ label, mode, changeMode }) => {
  return (
    <button
      onClick={() => changeMode()}
      class={` py-5 px-3 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md w-[100px] border-b hover:border-gray-100  mr-10 ${
        mode === label ? 'border-blue-500' : 'border-black'
      } `}
    >
      {label}
    </button>
  );
};
