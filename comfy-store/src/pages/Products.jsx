import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Filters, ProductsContainer, PaginationContainer } from '../components';

export const loader = async () => {
  const response = await customFetch(`/products`);
  // console.log(res.data);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
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
