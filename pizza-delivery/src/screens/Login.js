/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import pizza from "../assets/images/pizza.png"

export default function () {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <a className="inline-block mb-6" href="#">
              <img
                className="h-16"
                src={pizza}
                alt=""
              />
            </a>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Join our community
            </h3>
            <p className="text-lg text-coolGray-500 font-medium">
              Start your journey with our product
            </p>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Name*
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="name"
                placeholder="Patryk"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Email*
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="name"
                placeholder="dev@shuffle.dev"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Password*
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="w-full md:w-1/2">
                <label className="relative inline-flex items-center">
                  <input
                    className="form-checkbox appearance-none"
                    type="checkbox"
                  />
                  <img
                    className="absolute top-1/2 transform -translate-y-1/2 left-0"
                    src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                    alt=""
                  />
                  <span className="ml-7 text-xs text-coolGray-800 font-medium">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="w-full md:w-auto mt-1">
                <a
                  className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <a
              className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
            >
              Sign Up
            </a>
            <a
              className="inline-flex items-center justify-center py-3 px-7 mb-6 w-full text-base text-coolGray-500 font-medium text-center leading-6 bg-white border border-coolGray-100 hover:border-coolGray-200 rounded-md shadow-sm"
              href="#"
            >
              <img
                className="mr-2"
                src="flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"
                alt=""
              />
              <span>Sign in with Google</span>
            </a>
            <p className="text-center">
              <span className="text-xs font-medium">
                Already have an account?
              </span>
              <a
                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                href="#"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
