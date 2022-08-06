import React from 'react';

const Hamburger = ({ isOpen, setIsOpen }) => {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className='flex flex-col h-12 w-12   rounded justify-center items-center group md:hidden'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 bg-slate-300'
            : 'opacity-50 group-hover:opacity-100 bg-slate-300'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'opacity-0 bg-slate-300'
            : 'opacity-50 group-hover:opacity-100 bg-slate-300'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 bg-slate-300'
            : 'opacity-50 group-hover:opacity-100 bg-slate-300'
        }`}
      />
    </button>
  );
};

export default Hamburger;
