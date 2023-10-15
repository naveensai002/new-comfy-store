import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'sonner';

// console.log(getCartItemFromLocalStorage);

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartItemFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartItemFromLocalStorage(),
  reducers: {
    addItemToCart: (state, action) => {
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
      toast.success('item added to bag 🛒');
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error('Item removed from cart 🛒');
    },

    clearCart: (state) => {
      (state.cartItems = []),
        (state.numItemsInCart = 0),
        (state.cartTotal = 0),
        (state.tax = 0),
        (state.orderTotal = 0),
        toast.success('Items removed from cart 🛒');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Cart updated');
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItemToCart, removeItem, clearCart, editItem } =
  cartSlice.actions;
export default cartSlice.reducer;
