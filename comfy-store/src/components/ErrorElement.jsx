import React from 'react';
import { useRouteError } from 'react-router-dom';
import { toast } from 'sonner';

const ErrorElement = () => {
  const error = useRouteError();
  toast.error(error.message);

  return <h4 className='font-bold text-4xl'>There was an error...</h4>;
};

export default ErrorElement;
