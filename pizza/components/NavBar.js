import Image from 'next/image';
import Link from 'next/link';
// import styles from './Navbar.module.css';
// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';


function NavBar() {
//   const [navbar, setNavbar] = useState(false);
//   const dark = true;
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const currentTheme = theme === 'system' ? 'light' : theme;

  return (
    <div>
      <nav className="w-full bg-white-300 dark:bg-slate-900 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className='xl:w-1/3 flex items-center justify-center'>
            <Link className='flex items-center' href='/'>
              {/* <img
                className='w-8 h-8 inline-block mr-2 rounded-full'
                src='images/profile.jpeg'
                alt=''
              /> */}
              <span className=' xl:block xl:w-1/3 inline-block text-black-400'>
                Heshimakob
              </span>
            </Link>
           
          </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              {/* <div className="md:hidden bg-slate-900">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            
                >
        
                    <Image src="/close.svg" width={30} height={30}   color=' rgb(10, 47, 82)' alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-men.svg"
                      width={30}
                      height={30}
                      color=' rgb(10, 47, 82)'
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div> */}
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0  'p-12 md:p-0 block' : 'hidden'
              }`}
            >
                <div>
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  ">
                <Link  href='/'>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  ">
                <Link  href='/about'>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0 ">
                <Link  href='/contact'>
                    Contacts
                  </Link>
                </li>
                <li className="pb-6 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0">
                
  <button className='mr-12 bg-black-700 hover:bg-black w-8 h-8 rounded-full border-white-400 border-2 '
    >
    <img
        className='w-8 h-8  mr-12 rounded-full'
      src='images/sun.gif'
      alt=''
    />
  </button>

  <button className='mr-12 bg-white hover:bg-blue-300 w-8 h-8 rounded-full border-white-400 border-2 '>
  </button>
              </li>
              </ul>
                </div>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;