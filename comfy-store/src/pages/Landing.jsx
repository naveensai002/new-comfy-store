import React from 'react';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

//data that we are defining in loader we can access any where we want in nested children

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch('/products?featured=true'),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  // console.log(res.data);
  const products = response.data.data;
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
