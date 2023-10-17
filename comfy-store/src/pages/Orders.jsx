import SectionTitle from '../components/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
  // const { meta } = useLoaderData();
  // if (meta.pagination.total < 1) {
  //   return <SectionTitle text='please make an order' />;
  // }
  return (
    <>
      <SectionTitle text='Your Orders' />
      {/* <OrdersList /> */}
      {/* <ComplexPaginationContainer /> */}
    </>
  );
};
export default Orders;
