import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavLinks from './NavLinks';

const themes = {
  light: 'light',
  dark: 'dark',
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.dark;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const [showBtn, setShowBtn] = useState(false);

  const btnToggleHandle = () => {
    setShowBtn((prev) => !prev);
  };

  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    // console.log(theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink to='/'>
            <h3 className='hidden lg:flex btn  text-xl items-center font-bold'>
              Comfy <span className='text-rose-500'>Sloth</span>
            </h3>
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'
              onClick={btnToggleHandle}
            >
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            {showBtn && (
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
              >
                <NavLinks setShowBtn={setShowBtn} />
              </ul>
            )}
          </div>
        </div>
        <div className='navbar-center hidden md:flex lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            <BsSunFill className='swap-on h-6 w-6' />
            <BsMoonFill className='swap-off h-6 w-6' />
          </label>

          {/* CART */}
          <NavLink to='/cart' className='btn btn-ghost'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                3
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
