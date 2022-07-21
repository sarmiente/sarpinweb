import React from 'react';

import ReactTyped from 'react-typed';

const Hero = () => {
  return (
    <div className="relative w-full" id="servicios">
      {/*   <header>
        <nav className="fixed z-10 w-full border-b bg-white md:absolute md:bg-transparent">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0">
               <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-gray-900" />
                    <div className="h-6 w-2 bg-yellow-500" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    Arceelus
                  </span>
                </a>
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative w-10 h-10 -mr-2 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                  />
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                  />
                </button>
              </div> 
               <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                <div className="text-gray-600 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Services</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-yellow-800 font-semibold text-sm">
                      Sign up
                    </span>
                  </button>
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                  >
                    <span className="block text-yellow-900 font-semibold text-sm">
                      Contact Us
                    </span>
                  </button>
                </div>
              </div> 
            </div>
          </div>
        </nav>
      </header> */}
      <div>
        <img
          className="absolute w-full object-cover object-top h-full opacity-30 top-[4.68rem]"
          src="assets/nosotros_image.svg"
          alt="image"
          loading="lazy"
        />
        <div className="relative container border-l border-blue-500 border-r m-auto px-6 md:px-12 lg:px-7">
          <div className="pt-40 pb-10 lg:py-36 md:w-9/12 lg:w-7/12 ml-auto">
            <h1 className="text-black-600 font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
              Nuestro equipo de trabajo se caracteriza por ser{' '}
              <span className="text-blue-500">
                <ReactTyped
                  loop
                  typeSpeed={200}
                  backSpeed={20}
                  strings={['Eficiente', 'Efectivo', 'Eficaz']}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </h1>
            <p className="mt-8 text-black-600 text-2xl">
              Buscamos trabajar de la manera mas efectiva para exceder las
              expectativas de nuestros clientes.
            </p>
            <p className="mt-8 text-black-600 text-2xl">
              Nos dedicamos a la venta, instalacion y mantenimiento de sistemas
              cerrados de television, sistemas de automatizacion y domotica para
              negocios y hogares colombianos.
            </p>
            {/*  <div className="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition border border-black-500 bg-gradient-to-r from-blue-500 to-blue-100 focus:bg-green-500 sm:w-max"
              >
                <span className="block text-yellow-800 font-semibold text-sm">
                  About us
                </span>
              </button>
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
              >
                <span className="block text-yellow-900 font-semibold text-sm">
                  Contact Us
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
