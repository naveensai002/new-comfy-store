import React from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center place-items-center'>
      <div>
        <h1 className='text-xl lg:text-4xl maz-w-2xl tracking-tight font-bold'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg font-semibold leading-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          distinctio voluptates ipsa aut quasi consequuntur facere nihil est
          totam! Excepturi!
        </p>
        <div className='mt-10 capitalize flex '>
          <Link to='/products' className='font-bold uppercase'>
            Our
            <span className='ml-3 link link-hover hover:bg-gradient-to-r from-rose-500 p-4 rounded-xl gap-x-4 text-md text-black font-semibold uppercase'>
              products
            </span>
          </Link>
        </div>
      </div>
      {/* carousel */}
      <div className='max-w-md h-[28rem] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
