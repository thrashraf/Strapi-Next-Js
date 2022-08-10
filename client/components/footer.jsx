import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='mt-20 mb-10 text-center'>
      <div>
        <section className='flex mx-auto justify-between w-[200px]'>
          <FiTwitter
            size={25}
            color={'rgb(203, 213, 225)'}
            cursor={'pointer'}
          />
          <FiInstagram
            size={25}
            color={'rgb(203, 213, 225)'}
            cursor={'pointer'}
          />
          <FiDribbble
            size={25}
            color={'rgb(203, 213, 225)'}
            cursor={'pointer'}
          />
        </section>
        <h1 className='text-xl mt-10'>
          Create by <span className='font-semibold'>thrashraf</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
