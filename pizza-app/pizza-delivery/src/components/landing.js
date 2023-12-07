import React from 'react'
import pizza2 from '../assets/images/pizza2.jpg'


export default function () {
  return (
    <section
    className='position-relative bg-white overflow-hidden'
    // style={{
    //   backgroundImage: 'url("flex-assets/elements/pattern-light.png")',
    // }}
    >


    
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
                  src={pizza2}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}