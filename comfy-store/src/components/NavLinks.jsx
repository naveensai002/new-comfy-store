import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];

const NavLinks = ({ setShowBtn }) => {
  const { user, isAuthenticated } = useAuth0();
  // const user = useSelector((state) => state?.user?.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !isAuthenticated) {
          return null;
        }
        return (
          <li key={id} className='p-1'>
            <NavLink
              onClick={(prev) => setShowBtn(!prev)}
              className='capitalize py-2'
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
