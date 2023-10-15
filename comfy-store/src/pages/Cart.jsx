import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { CartItemsList, SectionTitle, CartTotal } from '../components';

const Cart = () => {
  const numItemsInCart = useSelector((state) => state?.cart?.numItemsInCart);
  const user = useSelector((state) => state?.user?.user);
  // console.log(numItemsInCart);

  if (numItemsInCart < 1) {
    return (
      <>
        <div className='text-sm breadcrumbs'>
          <ul>
            <li>
              <Link to='/'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 mr-2 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                Home
              </Link>
            </li>

            <li>
              <Link to='/products'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 mr-2 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                products
              </Link>
            </li>
          </ul>
        </div>

        <div className='grid place-items-center'>
          <SectionTitle text='Oops! 😐 your cart is empty' />
          <Link
            to='/products'
            className='btn btn-secondary link link-hover mt-8 text-xl font-semibold'
          >
            Add Products
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <SectionTitle text='Your cart' />
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                ></path>
              </svg>
              Home
            </Link>
          </li>

          <li>
            <Link to='/products'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                ></path>
              </svg>
              products
            </Link>
          </li>
        </ul>
      </div>

      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className=' lg:col-span-4 lg:pl-4 flex flex-col items-center w-full '>
          <CartTotal />
          {user ? (
            <Link to='/checkout' className='mt-8 btn btn-primary w-3/4 '>
              Checkout
            </Link>
          ) : (
            <Link to='/login' className='mt-8 btn btn-secondary w-3/4  '>
              Sign in to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
