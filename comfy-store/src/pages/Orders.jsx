import SectionTitle from '../components/SectionTitle';
import { redirect, useLoaderData } from 'react-router-dom';
import OrderList from '../components/OrderList';
import { toast } from 'sonner';
import { customFetch } from '../utils';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().user?.user;
    console.log(user);

    if (!user) {
      toast.error('you must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return { orders: response?.data?.data, meta: response?.data?.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  // console.log(data);
  if (meta.pagination.total < 1) {
    return <SectionTitle text='please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrderList />
      {/* <ComplexPaginationContainer /> */}
    </>
  );
};
export default Orders;
