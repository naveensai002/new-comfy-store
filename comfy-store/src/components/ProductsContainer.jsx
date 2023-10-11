import React, { useState } from 'react';
import ProductsGrid from './ProductsGrid';
import ProductList from './ProductList';

import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  // console.log(meta);
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-secondary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  };

  return (
    <div>
      <div className='flex items-center flex-row justify-between mt-8 border-b border-base-300 pb-5'>
        <h4 className='font-medium text-md text-secondary'>
          {totalProducts > 1
            ? `${totalProducts} Products`
            : `${totalProducts} Product`}
        </h4>
        <div className='flex flex-row items-center gap-3'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>No matching products found...</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
