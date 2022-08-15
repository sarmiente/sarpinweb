import React from 'react';

import ReactTyped from 'react-typed';

const Hero = () => {
  return (
    <div className="relative w-full" id="nosotros">
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
            <div className="mt-8 text-black-600 text-2xl">
              En Sarpin, ofrecemos soluciones integrales en tecnologia para la
              seguridad y la web.
            </div>
            <p className="mt-8 text-black-600 text-2xl">
              Nos dedicamos a la comercialización, instalacion y mantenimiento
              de sistemas cerrados de television (CCTV), sistemas de
              automatizacion y domotica para negocios y hogares colombianos.
            </p>
            <p className="mt-8 text-black-600 text-2xl">
              Siempre buscamos trabajar de la manera mas efectiva para exceder
              las expectativas de todos nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
