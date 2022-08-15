import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import ButtonOutline from './misc/ButtonOutline';

const Carousel = ({
  carouselContent = [
    {
      title: 'Cámara Tipo Bala HiLook 1080P Full HD',
      excerpt: 'Referencia: THC-B120-PS',
      image: '/assets/THC-B120-PS.svg',
    },
    {
      title: 'DVR HiLook : Full HD 1080p 4 y 8 Canales',
      excerpt: 'Referencia: DVR-108G-F1',
      image: '/assets/DVR-104G-F1.svg',
    },
    {
      title: 'Cámara Tipo Domo HiLook 1080P Full HD',
      excerpt: 'Referencia: THC-T120-P',
      image: '/assets/THC-T120.svg',
    },
  ],
}) => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 4000,

    customPaging: function (i) {
      return (
        <a href="">
          <span className="mx-3 rounded-l-full rounded-r-full h-3 w-3 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: 'slick-dots block w-max mx-auto',
  };
  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        className="max-w-screen-xl xl:px-16 mx-auto"
      >
        {carouselContent.map((carouselContent) => (
          <div className="mt-24 px-5 xl:mt-20 mx-auto " id="inicio">
            <div className="grid grid-flow-row sm:grid-flow-col md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-10 ">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-2xl lg:text-2xl xl:text-4xl font-medium text-black-600 leading-normal">
                  {carouselContent.title}
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  {carouselContent.excerpt}
                </p>
                <ButtonOutline>
                  {' '}
                  <a href="https://wa.me/573053255769" target="_blank">
                    Cotizar
                  </a>
                </ButtonOutline>
              </div>
              <div className="flex w-full">
                <div className="w-full h-full">
                  <Image
                    width={350}
                    height={350}
                    src={carouselContent.image}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
