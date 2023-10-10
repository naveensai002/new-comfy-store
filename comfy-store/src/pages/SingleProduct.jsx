import React, { useState } from 'react';

import { Link, useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { fetchSingleProduct } from '../utils';
import { formatPrice, generateAmountOptions } from '../utils/formatPrice';
import ProductImages from '../components/ProductImages';
import Stars from '../components/Stars';

import { toast } from 'sonner';

export const loader = async ({ params }) => {
  const res = await fetchSingleProduct(`${params.id}`);
  // console.log(res);
  return { product: res?.data };
};

const SingleProduct = () => {
  const navigate = useNavigate();
  const { product } = useLoaderData();
  const {
    category,
    company,
    description,
    images,
    name,
    colors,
    shipping,
    price,
    stock,
    stars,
  } = product;

  const [productColor, setProductColor] = useState(colors[0]);
  const [checked, setChecked] = useState(false);
  // console.log(checked);
  const [amount, setAmount] = useState(0);

  const dollarsAmount = formatPrice(price);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to='/products'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                ></path>
              </svg>
              products
            </Link>
          </li>
        </ul>
      </div>
      {/* Products */}

      <div className='grid lg:grid-cols-2 gap-x-8 lg:grid-x-16 mt-6'>
        <ProductImages images={images} />
        <section className=' mt-8 md:mt-0 font-bold capitalize  tracking-widest text-lg '>
          <h2 className='mb-4'>{name}</h2>
          <Stars star={stars} />
          <h5 className='mb-6'>{dollarsAmount}</h5>
          <p>{description}</p>

          <p className=' mt-4 text-secondary bg-transparent'>
            <span>{stock > 1 ? 'In stock' : 'Out of stock'}</span>
          </p>

          <p className='pt-4'>
            <span>Brand : {''}</span>
            {company}
          </p>

          <p className='mt-5 flex flex-row gap-6'>
            <span>Colors:</span>
            <span>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge w-6  h-6 mr-2   ${
                      color === productColor && 'border-2 border-secondary  '
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setProductColor(color);
                      setChecked(!checked);
                    }}
                  >
                    <input type='checkbox' className='checkbox' />
                  </button>
                );
              })}
            </span>
          </p>
          <div className='mt-4 flex flex-row gap-8'>
            <h3>Amount : {''}</h3>

            <select
              id='amount'
              className='select w-[120px] max-w-xs'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(3)}
            </select>
          </div>

          <p
            className='pt-4'
            onClick={() => {
              toast.success('Item added to bag');
              navigate('/cart');
            }}
          >
            {stock > 0 && <span className='btn btn-secondary'>Add to bag</span>}
          </p>
        </section>
      </div>
    </section>
  );
};

export default SingleProduct;
