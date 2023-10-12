import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotal = () => {
  const { cartTotal, tax, shipping, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <div className='card   shadow-xl bg-base-200'>
      <div className='card-body'>
        <p className='car-title flex flex-row  justify-between border-b border-base-300 pb-2 gap-4'>
          <span>Subtotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>

        <p className='car-title flex flex-row  justify-between border-b border-base-300 pb-2 gap-4'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>

        <p className='car-title flex flex-row  justify-between border-b border-base-300 pb-2 gap-4'>
          <span>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>

        <p className='car-title flex flex-row  justify-between border-b border-base-300 pb-2 gap-4'>
          <span>Order total</span>
          <span className='font-medium text-rose-500'>
            {formatPrice(orderTotal)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
