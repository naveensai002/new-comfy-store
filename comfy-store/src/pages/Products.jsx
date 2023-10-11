import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Filters, ProductsContainer, PaginationContainer } from '../components';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  const response = await customFetch(`/products`, {
    params,
  });
  // console.log(res.data);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
