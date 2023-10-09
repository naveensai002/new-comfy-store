import React from 'react';
import { FormInput, SubmitBtn } from '../components';

import { Link, Form } from 'react-router-dom';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center bg-gray-200'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-4xl font-bold text-center'>Register</h4>
        <FormInput
          type='text'
          label='Username'
          placeholder='Enter your Name'
          name='identifier'
        />
        <FormInput
          type='email'
          label='Email'
          placeholder='Enter your email'
          name='identifier'
        />
        <FormInput
          type='password'
          label='Passcode'
          name='password'
          placeholder='Enter your password'
        />
        <SubmitBtn text='Register' />
        <p className='text-center'>
          Already a member ? {''}
          <Link to='/login'>
            <span className='text-rose-500 font-semibold link link-hover'>
              Login
            </span>
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
