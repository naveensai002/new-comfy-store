import React from 'react';
import { formatPrice, generateAmountOptions } from '../utils';
import { useDispatch } from 'react-redux';
import { removeItem, editItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const {
    cartID,
    productID,
    image,
    amount,
    price,
    productColor,
    title,
    company,
  } = item;
  // console.log(item);

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <>
      <article
        key={cartID}
        className='mb-12 flex flex-col gap-y-4 sm:flex-row border-b border-base-300 pb-6 last:border-b-0 '
      >
        <img
          src={image}
          alt={title}
          className='rounded-lg sm:h-32 sm:w-32 object-cover h-24 w-24'
        />
        <div className='sm:ml-6 sm:w-48'>
          <h3 className='capitalize font-medium'>{title}</h3>
          <h4 className='capitalize mt-2 text-sm text-neutral-content'>
            {company}
          </h4>
          {/* COLOR */}
          <p className='mt-2 text-sm capitalize flex items-center gap-x-2'>
            Color:
            <span
              className='badge badge-sm'
              style={{ backgroundColor: productColor }}
            ></span>
          </p>
        </div>
        <div className='items-center sm:ml-24'>
          <div className='form-control max-w-xs'>
            <label htmlFor='amount' className='label p-0'>
              <span className='label-text'>Amount</span>
            </label>
            <select
              value={amount}
              onChange={handleAmount}
              id='amount'
              name='amount'
              className='select select-ghost w-full max-w-xs mt-4 '
            >
              {generateAmountOptions(amount + 5)}
            </select>
          </div>
          <button
            onClick={() => dispatch(removeItem({ cartID }))}
            className='mt-2 link link-primary link-hover   text-sm'
          >
            Remove
          </button>
        </div>
        {/* AMOUNT */}

        {/* REMOVE */}
        <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
        {/* PRICE */}
      </article>
    </>
  );
};

export default CartItem;
