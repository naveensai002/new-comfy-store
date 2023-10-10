import React, { useState } from 'react';

const ProductImages = ({ images = [{ url: '' }] }) => {
  // console.log(images);

  const [main, setMain] = useState(images[0]);
  return (
    <div>
      <img src={main.url} className='h-[420px] w-full' alt='main image' />
      <div className='h-32 w-[128px] md:w-[132px] mt-4 flex flex-row'>
        {images.slice(1, 5).map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.fileName}
              className={`image.url === main.url ? 'active' :null`}
              onClick={() => setMain(images[index + 1])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
