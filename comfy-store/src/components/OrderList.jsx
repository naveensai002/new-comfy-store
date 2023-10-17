import React from 'react';
import { useLoaderData } from 'react-router-dom';

import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrderList = () => {
  const { orders, meta } = useLoaderData();
  // console.log(orders);
  return (
    <div className='mt-8'>
      <div className='mt-4'>
        <h4 className='font-bold capitalize text-xl'>Total orders:10</h4>
        <div className='pt-4'>
          <table className='table table-zebra'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
                <th className='hidden sm:block'>Date</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {orders.map((order) => {
                const id = order.id;
                const { name, address, numItemsInCart, orderTotal, createdAt } =
                  order.attributes;
                console.log(order);
                const date = day(createdAt).format('hh:mm a - MMM Do, YYYY');
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{numItemsInCart}</td>
                    <td>{orderTotal}</td>
                    <td className='hidden sm:block'>{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
