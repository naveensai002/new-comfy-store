import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Filters, ProductsContainer, PaginationContainer } from '../components';

const url = ' https://strapi-store-server.onrender.com/api';

export const loader = async () => {
  const res = await axios(`${url}/products`);
  // console.log(res.data);
  const products = res.data.data;
  const meta = res.data.meta;
  return { meta, products };
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
