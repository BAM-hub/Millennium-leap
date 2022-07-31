import Image from "next/image";
import Link from "next/link";
import logogo from "../../public/logogo.png";
import avatar from "../../public/avatarph.jpg";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <MobileMenuButton />
          <div className='flex-1 flex items-center justify-center  sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Image
                className='block lg:hidden h-8 w-auto'
                src={logogo}
                alt='Workflow'
                width={150}
                height={85}
              />
            </div>
            <NavLinks />
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            {/* <User showMenu={showMenu} /> */}
            <NoUser />
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <MobileMenu />
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <div className='hidden sm:block sm:ml-6'>
    <div className='flex space-x-4'>
      <Link href='/'>
        <a
          className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
          aria-current='page'
        >
          Dashboard
        </a>
      </Link>

      <a
        href='#'
        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      >
        Team
      </a>

      <a
        href='#'
        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      >
        Projects
      </a>
    </div>
  </div>
);

const NoUser = () => {
  return (
    <>
      <div className='hover:bg-gray-600 px-2 py-1 rounded-md'>
        <Link href='/auth/Login'>
          <a className='flex gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className='hover:bg-gray-600 px-2 py-1 rounded-md'>
        <Link href='/auth/Register'>
          <a className='flex gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
};

const User = ({ showMenu }) => {
  return (
    <>
      <button
        type='button'
        className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
      >
        <span className='sr-only'>View notifications</span>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
          />
        </svg>
      </button>

      <div className='ml-3 relative'>
        <div>
          <button
            type='button'
            className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            id='user-menu-button'
            aria-expanded='false'
            aria-haspopup='true'
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className='sr-only'>Open user menu</span>
            <Image
              className='h-8 w-8 rounded-full'
              src={avatar}
              alt=''
              height={50}
              width={50}
            />
          </button>
        </div>
        <DropDown showMenu={showMenu} />
      </div>
    </>
  );
};

const MobileMenuButton = () => (
  <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
    <button
      type='button'
      className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
      aria-controls='mobile-menu'
      aria-expanded='false'
    >
      <span className='sr-only'>Open main menu</span>

      <svg
        className='block h-6 w-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>

      <svg
        className='hidden h-6 w-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </button>
  </div>
);

const MobileMenu = () => (
  <div className='px-2 pt-2 pb-3 space-y-1'>
    <a
      href='#'
      className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
      aria-current='page'
    >
      Dashboard
    </a>

    <a
      href='#'
      className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
    >
      Team
    </a>

    <a
      href='#'
      className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
    >
      Projects
    </a>
  </div>
);

const DropDown = ({ showMenu }) => (
  <div
    className={`${
      !showMenu && "hidden"
    }  origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
    role='menu'
    aria-orientation='vertical'
    aria-labelledby='user-menu-button'
    // tabIndex='-1'
  >
    <Link href='#' className='z-1 hover:bg-gray-300'>
      <a
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 z-2'
        role='menuitem'
        id='user-menu-item-0'
        tabIndex='-1'
      >
        Your Profile
      </a>
    </Link>

    <Link href='#' className='z-1 hover:bg-gray-300'>
      <a
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 z-2'
        role='menuitem'
        tabIndex='-1'
        id='user-menu-item-0'
      >
        Settings
      </a>
    </Link>

    <Link href='#' className='z-1 hover:bg-gray-300'>
      <a
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 z-2'
        role='menuitem'
        tabIndex='-1'
        id='user-menu-item-0'
      >
        Sign out
      </a>
    </Link>
  </div>
);

export default NavBar;
