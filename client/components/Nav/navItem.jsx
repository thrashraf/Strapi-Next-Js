import React from 'react';

const NavItem = () => {
  return ['learn', 'blog', 'bookmark', 'about us'].map((item, index) => (
    <li key={index}>
      <a href='#' className='block py-2 pr-4 pl-3 text-slate-300  rounded '>
        {item}
      </a>
    </li>
  ));
};

export default NavItem;
