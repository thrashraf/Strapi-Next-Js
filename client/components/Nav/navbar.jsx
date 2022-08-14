import { useState, useEffect, useRef } from 'react';
import Hamburger from '../hamburger';
import NavItem from './navItem';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';
import Link from 'next/link';
import { useAuth } from '../../helpers/Context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(!isOpen);
      }
    };

    document.body.addEventListener('click', closeDropdown);
  }, []);

  return (
    <nav className=' py-2.5 md:py-10 rounded '>
      <div className='container flex flex-wrap justify-between  mx-auto '>
        <aside className='md:flex items-center h-10'>
          {user ? (
            <div class='relative inline-block text-left'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='avatar'
                ref={btnRef}
              >
                {user.username.slice(0, 1)}
              </button>
              <div class={`userDropdown ${isOpen ? 'visible' : 'hidden'}`}>
                <div class='py-1 '>
                  <Link href='#'>
                    <span class='dropdownItem flex flex-col'>
                      <span>Profile</span>
                    </span>
                  </Link>

                  <span
                    class='dropdownItem flex flex-col'
                    onClick={() => logout()}
                  >
                    <span>logout</span>
                  </span>
                </div>
              </div>
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
