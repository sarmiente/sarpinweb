import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import LogoHeader from '../../public/assets/framefrontlogo.svg';
import ButtonWP from '../misc/ButtonWP';
import LogoWP from '../../public/assets/icon_whatsapp.svg';

const AltHeader = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          'fixed top-0 w-full  z-30 bg-white-500 transition-all ' +
          (scrollActive ? ' shadow-md pt-0' : ' pt-3')
        }
      >
        <nav className="max-w-screen-xl px-6 mx-auto grid grid-flow-col py-3 sm:px-8 lg:px-16 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center w-auto">
            <a href="/">
              <Image src={LogoHeader} alt="Sarpin Logo" />
            </a>
          </div>
          <ul className="hidden lg:flex col-start-6 col-end-9 text-black-500 items-center">
            <a
              href="/"
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
              onSetActive={() => {
                setActiveLink('inicio');
              }}
              className={
                'px-4 mx-2 py-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'inicio'
                  ? 'text-blue-500 animation-active'
                  : 'text-black-500 hover:text-blue-100')
              }
            >
              Inicio
            </a>
            <a
              href="/#nosotros"
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
              onSetActive={() => {
                setActiveLink('nosotros');
              }}
              className={
                'px-4 mx-2 py-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'nosotros'
                  ? 'text-blue-500 animation-active'
                  : 'text-black-500 hover:text-blue-100')
              }
            >
              Nosotros
            </a>
            <a
              href="/#servicios"
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
              onSetActive={() => {
                setActiveLink('servicios');
              }}
              className={
                'px-4 mx-2 py-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'servicios'
                  ? 'text-blue-500 animation-active'
                  : 'text-black-500 hover:text-blue-100')
              }
            >
              Servicios
            </a>
            {/*  <a
              href="/#proyectos"
              to="proyectos"
              activeClass="active"
              onSetActive={() => {
                setActiveLink('proyectos');
              }}
              className={
                'px-4 mx-2 py-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'proyectos'
                  ? 'text-blue-500 animation-active'
                  : 'text-black-500 hover:text-blue-100')
              }
            >
              Proyectos
            </a> */}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonWP className="inline">
              <Image src={LogoWP} alt="Logo whatsapp" width={30} />
              <a href="https://wa.me/573053255769" target="_blank">
                Contáctenos
              </a>
            </ButtonWP>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}

      <nav className="w-full mx-auto fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t bg-white-500">
        <div className=" sm:px-3">
          <ul className="flex justify-between items-center text-black-500">
            <a
              href="/"
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('inicio');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'inicio'
                  ? '  border-blue-500 text-blue-500'
                  : ' border-transparent')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Inicio
            </a>
            <a
              href="/#nosotros"
              activeClass="active"
              to="nosotros"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('nosotros');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'nosotros'
                  ? '  border-blue-500 text-blue-500'
                  : ' border-transparent')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Nosotros
            </a>
            <a
              href="/#servicios"
              activeClass="active"
              to="servicios"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('servicios');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'servicios'
                  ? '  border-blue-500 text-blue-500'
                  : ' border-transparent')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Servicios
            </a>
            {/*  <a
              href="/#proyectos"
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('proyectos');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'proyectos'
                  ? '  border-blue-500 text-blue-500'
                  : ' border-transparent')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Proyectos
            </a> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AltHeader;
