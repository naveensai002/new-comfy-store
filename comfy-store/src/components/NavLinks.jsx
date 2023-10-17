import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];

const NavLinks = ({ setShowBtn }) => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !user) {
          return null;
        }
        return (
          <li key={id} className='p-1'>
            <Link
              onClick={(prev) => setShowBtn(!prev)}
              className='capitalize py-2'
              to={url}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
