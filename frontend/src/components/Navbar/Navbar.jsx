import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { links } from '../data/link'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
  <header className='fixed top-0 left-0 right-0'>
    <nav className='max-w-[1920px] bg-black'>
      <div className='flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4 text-white'>
      <Link to="/" className='w-full text-3xl font-bold'>Logo!</Link>

      <ul className='hidden md:flex'>
        {links.map(item => (
          <Link to={item.path}
            key={item.id}
            className='p-4 rounded-xl m-2 cursor-pointer duration-300'
          >
            {item.link}
          </Link>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold m-4'>
          <Link to="/">
            Logo!
          </Link>
        </h1>

        {links.map(item => (
          <Link to={item.path}
            key={item.id}
            className='p-4 rounded-xl duration-300 cursor-pointer border-gray-600 block'
          >
            {item.link}
          </Link>
        ))}
      </ul>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;