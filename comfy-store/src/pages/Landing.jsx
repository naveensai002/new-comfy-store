import React from 'react';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

//data that we are defining in loader we can access any where we want in nested children

export const loader = async () => {
  const res = await customFetch('/products?featured=true');
  const products = res?.data?.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
