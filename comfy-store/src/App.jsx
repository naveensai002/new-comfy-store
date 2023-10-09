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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: 'true', element: <Landing /> },
      { path: 'products', element: <Products /> },
      { path: '/products/:productId', element: <SingleProduct /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'about', element: <About /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/Register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
