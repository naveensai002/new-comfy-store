import React from 'react';

const FormInput = ({ label, placeholder, name, type }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text font-semibold'>{label}</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='input input-bordered '
      />
    </div>
  );
};

export default FormInput;
