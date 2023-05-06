// import { a } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineClose,  AiOutlineMenu } from 'react-icons/ai';
// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `#ecf0f3` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <a href='/'>
            <h1 className='text-xl text-[#264653]'>Aaryan Bhandari</h1>
        </a>
        <div>
          <ul style={{ color: `#1f2937` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b text-[#2a9d8f]'>
              <a href='/'>Home</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-[#2a9d8f]'>
              <a href='/#why'>Why</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-[#2a9d8f]'>
              <a href='/#skills'>Skills</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-[#2a9d8f]'>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `#1f2937` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 hrefp-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 hrefp-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] hrefp-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <a href='/'>
                 <h1 className='text-xl'>Aaryan Bhandari</h1>
              </a>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s learn something  hrefgether
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <a href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </a>
              <a href='/#why'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Why?
                </li>
              </a>
              <a href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </a>
              <a href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
