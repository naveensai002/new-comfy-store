import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-2 bg-neutral text-white'>
      <div className='align-element sm:justify-end flex justify-center'>
        <div className='flex gap-x-4 '>
          <Link to='/login' className='link link-hover text-md sm:text-xs'>
            Sign in
          </Link>
          <Link to='/register' className='link link-hover text-md sm:text-xs'>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
