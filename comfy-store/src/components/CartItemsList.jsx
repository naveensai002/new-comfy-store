import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from './SectionTitle';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  //
  return (
    <>
      {cartItems &&
        cartItems.map((item) => {
          return <CartItem key={item.cartID} item={item} />;
        })}
    </>
  );
};

export default CartItemsList;
