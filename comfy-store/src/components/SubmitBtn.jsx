import React from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div>
      <button
        className='btn btn-primary  mt-2  btn-block'
        disabled={isSubmitting}
      >
        {`${
          isSubmitting ? (
            <>
              <span className='loading loading-spinner '>sending...</span>
            </>
          ) : (
            text || 'Submit'
          )
        }`}
      </button>
    </div>
  );
};

export default SubmitBtn;
