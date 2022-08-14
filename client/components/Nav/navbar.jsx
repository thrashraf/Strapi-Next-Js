import { useState } from 'react';
import Hamburger from '../hamburger';
import NavItem from './navItem';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';
import Link from 'next/link';
import { useAuth } from '../../helpers/Context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className=' py-2.5 md:py-10 rounded '>
      <div className='container flex flex-wrap justify-between  mx-auto '>
        <aside className='md:flex items-center h-10'>
          {user ? (
            <div className='w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full flex justify-center items-center text-xl'>
              {user.username.slice(0, 1)}
            </div>
          ) : (
            <Link href='/login'>
              <button className='bg-blue-500 py-1.5 px-6 rounded-md'>
                Login
              </button>
            </Link>
          )}

          <ul className='nav bg-transparent invisible md:visible'>
            <NavItem />
          </ul>
        </aside>

        {/* for mobile */}
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`w-full md:hidden transition ease transform duration-500  ${
            !isOpen && 'hidden'
          }`}
        >
          <ul className='nav bg-gray-900 border-gray-900'>
            <NavItem />
          </ul>
        </div>
        {/* for mobile */}

        {/* for tablet and desktop */}
        <aside className='justify-between items-center w-[150px] hidden md:flex'>
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
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
