import React from 'react';
import { CartTotal, FormInput, SectionTitle } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth0 } from '@auth0/auth0-react';

export const loader = (store) => () => {
  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.numItemsInCart);

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }

  if (!cartItems) {
    return (
      <div className='text-center justify-center flex flex-col pt-10'>
        <SectionTitle text='Your cart is empty' />
        <Link
          to='/products'
          className='mt-10 bg-rose-400 max-w-md  items-center mx-auto p-4 rounded-md w-3/4'
        >
          <button className='font-semibold text-2xl text-black capitalize '>
            shop
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className='flex flex-row justify-between gap-x-16'>
      <div className='w-2/4'>
        <SectionTitle text='Place your order' />
        <FormInput label='Name' type='text' name='name' />
        <FormInput label='Address' type='text' name='address' />
        <Link to='/orders' className='mt-8 btn btn-primary w-full '>
          place your orders
        </Link>
      </div>
      <div className='w-2/4 justify-center align-middle '>
        <CartTotal />
      </div>
    </div>
  );
};

export default Checkout;
