import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'sonner';

const getCartItemFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
// console.log(getCartItemFromLocalStorage);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: getCartItemFromLocalStorage?.cartItems || [],
    numItemsInCart: getCartItemFromLocalStorage?.numItemsInCart || 0,
    cartTotal: getCartItemFromLocalStorage?.cartTotal || 0,
    shipping: 100,
    tax: getCartItemFromLocalStorage?.tax || 0,
    orderTotal: getCartItemFromLocalStorage?.orderTotal || 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      // console.log(action.payload);

      const { cartProduct } = action.payload;
      // console.log(cartProduct);
      const item = state.cartItems.find(
        (it) => it.cartID === cartProduct.cartID
      );
      if (item) {
        item.amount += cartProduct.amount;
      } else {
        state.cartItems.push(cartProduct);
      }

      state.numItemsInCart += cartProduct.amount;
      state.cartTotal += cartProduct.price * cartProduct.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      localStorage.setItem('cart', JSON.stringify(state));
      // state.cartItems = item;

      toast.success('item added to bag 🛒');
    },
    removeItem: (state, action) => {
      const { cartProduct } = action.payload;

      const product = state.cartItems.find(
        (i) => i.cartID === cartProduct.cartID
      );
      const item = state.cartItems.filter(
        (it) => it.cartID !== cartProduct.cartID
      );

      state.cartItems = item;
      state.numItemsInCart -= product.amount;
      state.cartTotal -= cartProduct.price * cartProduct.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.error('Item removed from cart 🛒');
    },
    clearCart: (state, action) => {
      (state.cartItems = []),
        (state.numItemsInCart = 0),
        (state.cartTotal = 0),
        (state.tax = 0),
        (state.orderTotal = 0),
        toast.success('Items removed from cart 🛒');
    },
    editItem: (state, action) => {
      const { cartID, value } = action.payload;
      const tempCart = state.cartItems.map((item) => {
        if (item.cartID === cartID) {
          if (value === 'inc') {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            state.cartItems.amount = newAmount;
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1;
            if (newAmount < item.min) {
              newAmount = 1;
            }
            state.cartItems.amount = newAmount;
          }
        }
        return item;
      });
      state.cartItems = tempCart;
      toast.warning('Item edited successfully💀');
    },
  },
});

export const { addItemToCart, removeItem, clearCart, editItem } =
  cartSlice.actions;
export default cartSlice.reducer;
