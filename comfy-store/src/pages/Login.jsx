import React from 'react';
import { FormInput, SubmitBtn } from '../components';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Form } from 'react-router-dom';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className='h-screen grid place-items-center bg-gray-200'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4
          className='text-4xl font-bold text-center'
          onClick={() => loginWithRedirect()}
        >
          Login
        </h4>
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
        <SubmitBtn text='Login' />
        <p className='text-center' onClick={() => loginWithRedirect()}>
          Not a member yet ? {''}
          <Link to='/register'>
            <span
              onClick={() => loginWithRedirect()}
              className='text-rose-500 font-semibold link link-hover'
            >
              Register here
            </span>
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
