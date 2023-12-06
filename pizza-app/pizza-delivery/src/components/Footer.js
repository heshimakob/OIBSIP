/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import pizza from "../assets/images/pizza.png"

export default function () {
  return (
    <section
    className='position-relative pt-20 bg-white overflow-hidden'
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
    <div className='position-relative container mb-6' style={{ zIndex: 1 }}>
      <div className='row align-items-center'>
        <div className='col-12 col-md-auto'>
          <a href='#'>
            <img
              className='img-fluid'
              src='flex-assets/logos/flex-dark-green.svg'
              alt=''
            />
          </a>
        </div>
        <div className='col-12 col-md'>
          <ul className='nav justify-content-md-end'>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Product
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Resources
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Careers
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Help
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link p-6 fs-9 link-secondary' href='#'>
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      className='position-relative border-bottom border-light'
      style={{ zIndex: 1 }}
    />
    <div className='position-relative container' style={{ zIndex: 1 }}>
      <div className='row align-items-center justify-content-between pt-12 pb-36'>
        <div className='col-auto'>
          <p className='mb-0 fs-11 fw-medium text-secondary-light'>
            © 2023 Pizza-delivery. Oasisis info byte.
          </p>
        </div>
        <div className='col-auto'>
          <ul className='nav justify-content-md-end'>
            <li className='nav-item'>
              <a
                className='nav-link p-4 fs-9 link-secondary-light opacity-50'
                href='#'
              >
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.6349 20.7273V12.766H16.3583L16.7669 9.66246H13.6349V7.68128C13.6349 6.78301 13.8882 6.17085 15.203 6.17085L16.8771 6.17017V3.39424C16.5876 3.35733 15.5938 3.27273 14.4371 3.27273C12.0217 3.27273 10.3681 4.71881 10.3681 7.37391V9.66246H7.63647V12.766H10.3681V20.7273H13.6349Z'
                    fill='currentcolor'
                  />
                  <mask
                    id='mask0_352_3312'
                    style={{ maskType: 'alpha' }}
                    maskUnits='userSpaceOnUse'
                    x={7}
                    y={3}
                    width={10}
                    height={18}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.6349 20.7273V12.766H16.3583L16.7669 9.66246H13.6349V7.68128C13.6349 6.78301 13.8882 6.17085 15.203 6.17085L16.8771 6.17017V3.39424C16.5876 3.35733 15.5938 3.27273 14.4371 3.27273C12.0217 3.27273 10.3681 4.71881 10.3681 7.37391V9.66246H7.63647V12.766H10.3681V20.7273H13.6349Z'
                      fill='white'
                    />
                  </mask>
                  <g mask='url(#mask0_352_3312)' />
                </svg>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link p-4 fs-9 link-secondary-light opacity-50'
                href='#'
              >
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M21.8181 6.14597C21.1356 6.44842 20.4032 6.65355 19.6336 6.74512C20.4194 6.27461 21.0208 5.5283 21.3059 4.64176C20.5689 5.07748 19.7553 5.39388 18.8885 5.56539C18.1943 4.82488 17.2069 4.36364 16.1118 4.36364C14.0108 4.36364 12.3072 6.06718 12.3072 8.16706C12.3072 8.46488 12.3408 8.75576 12.4057 9.03391C9.24434 8.87512 6.44104 7.36048 4.56483 5.05894C4.23686 5.61985 4.05028 6.27342 4.05028 6.97109C4.05028 8.29106 4.72243 9.45573 5.74225 10.1371C5.11877 10.1163 4.53237 9.94476 4.01901 9.65967V9.70718C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5465 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1622 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4278 9.10416 19.4278C16.1026 19.4278 19.928 13.6312 19.928 8.60397L19.9153 8.11145C20.6627 7.57833 21.3094 6.90851 21.8181 6.14597Z'
                    fill='currentcolor'
                  />
                  <mask
                    id='mask0_352_3313'
                    style={{ maskType: 'alpha' }}
                    maskUnits='userSpaceOnUse'
                    x={3}
                    y={4}
                    width={19}
                    height={16}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M21.8181 6.14597C21.1356 6.44842 20.4032 6.65355 19.6336 6.74512C20.4194 6.27461 21.0208 5.5283 21.3059 4.64176C20.5689 5.07748 19.7553 5.39388 18.8885 5.56539C18.1943 4.82488 17.2069 4.36364 16.1118 4.36364C14.0108 4.36364 12.3072 6.06718 12.3072 8.16706C12.3072 8.46488 12.3408 8.75576 12.4057 9.03391C9.24434 8.87512 6.44104 7.36048 4.56483 5.05894C4.23686 5.61985 4.05028 6.27342 4.05028 6.97109C4.05028 8.29106 4.72243 9.45573 5.74225 10.1371C5.11877 10.1163 4.53237 9.94476 4.01901 9.65967V9.70718C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5465 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1622 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4278 9.10416 19.4278C16.1026 19.4278 19.928 13.6312 19.928 8.60397L19.9153 8.11145C20.6627 7.57833 21.3094 6.90851 21.8181 6.14597Z'
                      fill='white'
                    />
                  </mask>
                  <g mask='url(#mask0_352_3313)' />
                </svg>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link p-4 fs-9 link-secondary-light opacity-50'
                href='#'
              >
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.6007 2.18182H16.3992C19.3874 2.18182 21.8184 4.61281 21.8182 7.60074V16.3993C21.8182 19.3872 19.3874 21.8182 16.3992 21.8182H7.6007C4.61276 21.8182 2.18188 19.3873 2.18188 16.3993V7.60074C2.18188 4.61281 4.61276 2.18182 7.6007 2.18182ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3993H20.076V7.60074C20.076 5.57348 18.4266 3.92405 16.3992 3.92405H7.6007C5.57343 3.92405 3.92412 5.57348 3.92412 7.60074V16.3993C3.92412 18.4266 5.57343 20.0761 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16424 9.16425 6.85714 12.0001 6.85714C14.8359 6.85714 17.1429 9.16424 17.1429 12.0001C17.1429 14.8359 14.8359 17.1429 12.0001 17.1429C9.16425 17.1429 6.85721 14.8359 6.85721 12.0001ZM8.62805 12C8.62805 13.8593 10.1408 15.3719 12.0001 15.3719C13.8593 15.3719 15.3721 13.8593 15.3721 12C15.3721 10.1406 13.8594 8.6279 12.0001 8.6279C10.1407 8.6279 8.62805 10.1406 8.62805 12Z'
                    fill='currentcolor'
                  />
                  <mask
                    id='mask0_352_3314'
                    style={{ maskType: 'alpha' }}
                    maskUnits='userSpaceOnUse'
                    x={2}
                    y={2}
                    width={20}
                    height={20}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.6007 2.18182H16.3992C19.3874 2.18182 21.8184 4.61281 21.8182 7.60074V16.3993C21.8182 19.3872 19.3874 21.8182 16.3992 21.8182H7.6007C4.61276 21.8182 2.18188 19.3873 2.18188 16.3993V7.60074C2.18188 4.61281 4.61276 2.18182 7.6007 2.18182ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3993H20.076V7.60074C20.076 5.57348 18.4266 3.92405 16.3992 3.92405H7.6007C5.57343 3.92405 3.92412 5.57348 3.92412 7.60074V16.3993C3.92412 18.4266 5.57343 20.0761 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16424 9.16425 6.85714 12.0001 6.85714C14.8359 6.85714 17.1429 9.16424 17.1429 12.0001C17.1429 14.8359 14.8359 17.1429 12.0001 17.1429C9.16425 17.1429 6.85721 14.8359 6.85721 12.0001ZM8.62805 12C8.62805 13.8593 10.1408 15.3719 12.0001 15.3719C13.8593 15.3719 15.3721 13.8593 15.3721 12C15.3721 10.1406 13.8594 8.6279 12.0001 8.6279C10.1407 8.6279 8.62805 10.1406 8.62805 12Z'
                      fill='white'
                    />
                  </mask>
                  <g mask='url(#mask0_352_3314)' />
                </svg>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link p-4 fs-9 link-secondary-light opacity-50'
                href='#'
              >
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z'
                    fill='currentcolor'
                  />
                </svg>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link p-4 fs-9 link-secondary-light opacity-50'
                href='#'
              >
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.2 3H4.8C3.81 3 3 3.81 3 4.8V19.2C3 20.19 3.81 21 4.8 21H19.2C20.19 21 21 20.19 21 19.2V4.8C21 3.81 20.19 3 19.2 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.67C6.15 8.67 5.43 7.95 5.43 7.05C5.43 6.15 6.15 5.43 7.05 5.43C7.95 5.43 8.67 6.15 8.67 7.05C8.67 7.95 7.95 8.67 7.05 8.67ZM18.3 18.3H15.6V13.53C15.6 12.81 14.97 12.18 14.25 12.18C13.53 12.18 12.9 12.81 12.9 13.53V18.3H10.2V10.2H12.9V11.28C13.35 10.56 14.34 10.02 15.15 10.02C16.86 10.02 18.3 11.46 18.3 13.17V18.3Z'
                    fill='currentcolor'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
}
