import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

import { formatPrice } from '../utils/formatPrice';

const ProductsGrid = () => {
  const { products } = useLoaderData();

  // console.log(products.slice(0, 4));
  return (
    <div className='grid gap-6 pt-12 md:grid-cols-2  '>
      {products &&
        products.slice(8, 16).map((product) => {
          // console.log(product.id);
          const { name, price, image } = product;
          const dollarsAmount = formatPrice(price);

          return (
            <Link
              key={product.id}
              to={`products/${product.id}`}
              className='card w-full  shadow-xl hover:shadow-2xl transition duration-300'
            >
              <figure className='px-4 py-4g  transition cursor-pointer'>
                <div className='relative group '>
                  <img
                    src={image}
                    alt={name}
                    className='rounded-xl relative h-64 md:h-48 object-cover  w-full  group-hover:opacity-60'
                  />
                  <div className='absolute opacity-0 p-2 rounded-full group-hover:opacity-100 transition top-[48%] left-[48%] z-10 bg-rose-500'>
                    <BiSearch size={26} className='text-white' />
                  </div>
                </div>
                <div className='card-body items-center text-center'>
                  <h2 className='card-title capitalize tracking-wider'>
                    {name}
                  </h2>
                  <span className='text-secondary'>{dollarsAmount}</span>
                  <div className='card-actions'>
                    <button className='btn btn-primary'>check product</button>
                  </div>
                </div>
              </figure>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductsGrid;

// NOTE

// like here we can access the data that we called through
// api in the landing page
// since this is nested many levels deep in landing page we can access the data anywhere we want
//this is the beatuy of useLoaderData
