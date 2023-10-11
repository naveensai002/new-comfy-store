import React, { useState } from 'react';
import { formatPrice } from '../utils';

const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  console.log(selectedPrice);
  return (
    <div className='form-control'>
      <label htmlFor={name} className='cursor-pointer label flex'>
        <span className='label-text capitalize'>
          {label} :
          <span className='pl-3 font-bold'>{formatPrice(selectedPrice)}</span>
        </span>
      </label>
      <input
        type='range'
        name={name}
        value={selectedPrice}
        min={0}
        max={maxPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
