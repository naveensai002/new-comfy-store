import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  Register,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  SingleProduct,
  Login,
  Products,
} from './pages';

import { ErrorElement } from './components';

import { store } from './store/store';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as orderLoader } from './pages/Orders';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: 'true',
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },

      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      { path: 'about', element: <About /> },
      { path: 'orders', element: <Orders />, loader: orderLoader(store) },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/Register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
