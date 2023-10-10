import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const star = ({ star }) => {
  // console.log(star);

  return (
    <div className='rating rating-md mb-6'>
      <span>
        {star > 1 ? <BsStarFill /> : star > 0.5 ? <BsStarHalf /> : <BsStar />}
      </span>

      <span>
        {star >= 2 ? <BsStarFill /> : star >= 1.5 ? <BsStarHalf /> : <BsStar />}
      </span>

      <span>
        {star >= 3 ? <BsStarFill /> : star >= 2.5 ? <BsStarHalf /> : <BsStar />}
      </span>

      <span>
        {star >= 4 ? <BsStarFill /> : star >= 3.5 ? <BsStarHalf /> : <BsStar />}
      </span>

      <span>
        {star === 5 ? (
          <BsStarFill />
        ) : star >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    </div>
  );
};

export default star;
