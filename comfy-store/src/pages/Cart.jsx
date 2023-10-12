import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { CartItemsList, SectionTitle, CartTotal } from '../components';

const Cart = () => {
  const numItemsInCart = useSelector((state) => state?.cart?.numItemsInCart);
  console.log(numItemsInCart);

  const user = null;

  if (numItemsInCart < 1) {
    return (
      <div className='grid place-items-center'>
        <SectionTitle text='Oops! 😐 your cart is empty' />
        <Link
          to='/products'
          className='btn btn-secondary link link-hover mt-8 text-xl font-semibold'
        >
          Add Products
        </Link>
      </div>
    );
  }
  return (
    <>
      <SectionTitle text='Your cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotal />
          {user ? (
            <Link to='/checkout' className='mt-8 btn btn-primary'>
              Checkout
            </Link>
          ) : (
            <Link to='/login' className='mt-8 btn btn-secondary'>
              Sign in to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
