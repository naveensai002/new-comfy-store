import React from 'react';

const FormInput = ({ label, placeholder, name, type, size }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text font-semibold'>{label}</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered input-${size} `}
      />
    </div>
  );
};

export default FormInput;
