import React from 'react';
import { CartTotal, FormInput, SectionTitle, SubmitBtn } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { redirect, Form } from 'react-router-dom';
import { toast } from 'sonner';

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.error('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.numItemsInCart);

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
      <div className='w-2/4  '>
        <Form method='post' className='flex flex-col gap-y-4'>
          <h4>shipping information</h4>
          <FormInput label='Name' type='text' name='name' />
          <FormInput label='Address' type='text' name='address' />

          <SubmitBtn text='place your order' />
        </Form>
      </div>
      <div className='w-2/4 justify-center align-middle '>
        <CartTotal />
      </div>
    </div>
  );
};

export default Checkout;
