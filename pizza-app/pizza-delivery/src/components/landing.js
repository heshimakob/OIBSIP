import React from 'react'
import pizza from '../assets/images/pizza.png'

export default function () {
  return (
    <section
    className='position-relative bg-white overflow-hidden'
    style={{
      backgroundImage: 'url("flex-assets/elements/pattern-light.png")',
    }}
  >
    <div
      className='position-absolute top-0 start-0 h-100 w-100'
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
      }}
    />
    <div className='position-relative'>
      <nav className='navbar navbar-dark navbar-expand-lg py-5 py-lg-1'></nav>
      <div
        className='d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs'
        style={{ zIndex: 9999 }}
      >
        <div
          className='navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark'
          style={{ opacity: '75%' }}
        />
        <nav className='position-relative h-100 w-100 d-flex flex-column justify-content-between p-6 bg-white overflow-auto'>
          <div className='d-flex align-items-center'>
            <a className='me-auto h4 mb-0 text-decoration-none' href='#'>
              <img
                className='img-fluid'
                src='flex-assets/logos/flex-dark-green.svg'
                alt=''
              />
            </a>
            <a className='navbar-close text-secondary' href='#'>
              <svg
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 18L18 6M6 6L18 18'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
    
          <div className='row align-items-center g-6'>
            <div className='col-12'>
              <a
                className='link-secondary fs-11 d-block w-100 text-center fw-medium'
                href='#'
              >
                Log In
              </a>
            </div>
            <div className='col-12'>
              <a
                className='btn btn-sm btn-success w-100 text-success-light shadow'
                href='#'
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className='container'>
      <div className='pt-28 pb-28 position-relative'>
        <div className='row g-16'>
          <div className='col-12 col-md-6'>
            <div className='mw-md-lg'>
              <span className='mb-4 badge bg-success text-white text-uppercase shadow'>
                Header
              </span>
              <h1
                className='mb-6 font-heading fs-4'
                style={{ letterSpacing: '-1px' }}
              >
                A small business is only as good as its tools.
              </h1>
              <p className='mb-8 fs-9 fw-medium text-secondary'>
                We’re different. Flex is the only saas business platform
                that lets you run your business on one platform, seamlessly
                across all digital channels.
              </p>
              <div className='row g-4'>
                <div className='col-12 col-md-auto'>
                  <a
                    className='btn btn-lg btn-success w-100 text-success-light shadow'
                    href='#'
                  >
                    Request a Demo
                  </a>
                </div>
                <div className='col-12 col-md-auto'>
                  <div className='bg-white rounded'>
                    <a
                      className='btn btn-lg btn-outline-light w-100 text-light-dark shadow'
                      href='#'
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='row justify-content-center'>
              <div className='position-relative col-auto'>
                <img
                  className='position-absolute top-0 start-0 mt-n12 ms-n12'
                  style={{ zIndex: 1 }}
                  src='flex-assets/elements/circle-orange.svg'
                  alt=''
                />
                <img
                  className='position-absolute bottom-0 end-0 me-n5 mb-n5'
                  style={{ zIndex: 1 }}
                  src='flex-assets/elements/dots-blue.svg'
                  alt=''
                />
                <img
                  className='position-relative img-fluid'
                  src={pizza}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    // <div>
    //        <section
    //     className='relative bg-gray-100 overflow-hidden'
    //     style={{
    //       backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    //       backgroundPosition: 'center',
    //     }}
    //   >
      
    //     <div className='py-20 md:py-28'>
    //       <div className='container px-4 mx-auto'>
    //         <div className='flex flex-wrap xl:items-center -mx-4'>
    //           <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0'>
    //             <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl'>
    //               Pizza-delivery
    //             </span>
    //             <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight'>
    //               A small business is only as good as its tools.
    //             </h1>
    //             <p className='mb-8 text-lg md:text-xl text-coolGray-500 font-medium'>
    //               We’re different. Flex is the only saas business platform that
    //               lets you run your business on one platform, seamlessly across
    //               all digital channels.
    //             </p>
    //             <div className='flex flex-wrap'>
    //               <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
    //                 <a
    //                   className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm'
    //                   href='#'
    //                 >
    //                   Pizza disponible
    //                 </a>
    //               </div>
    //               <div className='w-full md:w-auto py-1 md:py-0'>
    //                 <a
    //                   className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm'
    //                   href='#'
    //                 >
    //                   Login
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='w-full md:w-1/2 px-4'>
    //             <div className='relative mx-auto md:mr-0 max-w-max'>
    //               <img
    //                 className='absolute z-10 -left-14 -top-12 w-28 md:w-auto'
    //                 src='flex-ui-assets/elements/circle3-yellow.svg'
    //                 alt=''
    //               />
    //               <img
    //                 className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto'
    //                 src='flex-ui-assets/elements/dots3-blue.svg'
    //                 alt=''
    //               />
    //               <img
    //                 className='relative rounded-7xl'
    //                 src={pizza}
    //                 alt=''
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  )
}
