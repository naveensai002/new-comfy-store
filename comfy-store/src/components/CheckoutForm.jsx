import React from 'react';
import { Form, redirect } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'sonner';
import { clearCart } from '../features/cart/cartSlice';
import FormInput from './FormInput';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    // console.log(name, address);
    const user = store.getState().user.user;
    // console.log(store.getState().cart);
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
    // console.log(cartItems, orderTotal, numItemsInCart);

    const orders = {
      name,
      address,
      cartItems,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
      chargeTotal: orderTotal,
    };
    try {
      const response = await customFetch.post(
        '/orders',
        { data: orders },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      //order place hogya h to cart me  kuch ni bcha right

      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      toast.error(error);
    }
    return null;
  };

const CheckoutForm = () => {
  return (
    <>
      <Form method='POST'>
        <div className='pt-2 flex flex-col gap-y-4'>
          <h4>Shipping information</h4>
          <FormInput
            label='Name'
            placeholder='enter your name'
            name='name'
            type='text'
          />
          <FormInput
            label='Address'
            placeholder='Enter your address'
            name='address'
          />
        </div>
        <div className='pt-5'>
          <SubmitBtn text='place your order' />
        </div>
      </Form>
    </>
  );
};

export default CheckoutForm;

/**
 * import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(['orders']);
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl capitalize'>shipping information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <div className='mt-4'>
        <SubmitBtn text='place your order' />
      </div>
    </Form>
  );
};
export default CheckoutForm;
 * 
 * 
 * 
 * 
 */
