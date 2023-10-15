import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <header className='py-2 bg-neutral text-neutral-content'>
      <div className='align-element sm:justify-end flex justify-center'>
        {user ? (
          <div className='flex gap-x-2 items-center sm:gap-x-8'>
            <p className='text-xs text-rose-400 sm:text-sm capitalize '>
              Hello, {user.userName}
            </p>
            <button
              onClick={handleLogout}
              className='btn btn-xs btn-outline btn-warning'
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-4 '>
            <Link to='/login' className='link link-hover text-md sm:text-xs'>
              Sign in
            </Link>
            <Link to='/register' className='link link-hover text-md sm:text-xs'>
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
