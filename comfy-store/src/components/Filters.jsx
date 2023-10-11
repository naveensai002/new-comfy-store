import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheck from './FormCheck';

export const loader = () => {
  return null;
};

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, price, order } = params;
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* Search input  */}
      <FormInput
        type='search'
        label='Search Product'
        name='search'
        size='input-sm'
        defaultValue={search}
      />

      {/* SELECT INPUT */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        size='select-sm'
        defaultValue={company}
      />
      {/* Categories */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        size='select-sm'
        defaultValue={category}
      />
      {/* ORDER */}

      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />

      {/* Range */}
      <FormRange
        name='range'
        label='select price'
        size='range-sm'
        price={price}
      />

      {/* checkbox */}
      <FormCheck
        label='Free Shipping'
        name='shipping'
        size='checkbox-sm'
        checked
        defaultValue={shipping}
        // defaultValue='checked'
      />
      {/* buttons */}
      <button type='submit' className='btn btn-secondary btn-sm'>
        Search
      </button>
      <Link to='/products' className='btn btn-sm btn-warning uppercase'>
        <button type='submit '>RESET</button>
      </Link>
    </Form>
  );
};

export default Filters;
