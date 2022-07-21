import React from 'react';
import Slider from 'react-slick';

const Proyectos = ({
  heroContent = [
    {
      image: '/assets/Icon/people1.svg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Liza Pupo',
      occupation: 'Fundadora de Pupo Store',
    },
    {
      image: '/assets/Icon/people2.svg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Carlos Cantillo',
      occupation: 'Engineer',
    },
    {
      image: '/assets/Icon/people3.svg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Daniel Arango',
      occupation: 'Ingeniero Civil',
    },
  ],
}) => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    customPaging: function (i) {
      return (
        <a href="">
          <span className="mx-2 rounded-l-full rounded-r-full h-2 w-2 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: 'slick-dots block w-max mx-auto',
  };
  return (
    <>
      <div className="py-2" id="proyectos">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl-px-6">
          <h2 className="mb-10 text-center text-2xl text-black-600 font-bold md:text-4xl">
            Ultimos Proyectos
          </h2>
          <Slider {...settings} arrows={false}>
            {heroContent.map((heroContent) => (
              <div className="mx-auto text-center space-y-6 md:w-8/12 lg:w-7/12 pb-5">
                <img
                  className="w-16 h-16 mx-auto rounded-full"
                  src={heroContent.image}
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p class="text-gray-600">
                  {' '}
                  <span class="font-serif">"</span> {heroContent.excerpt}{' '}
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    {heroContent.name}
                  </h6>
                  <span className="text-xs text-black-600">
                    {heroContent.occupation}
                  </span>
                </div>
                {/*  <img
                  className="mx-auto"
                  src={heroContent.image}
                  alt="company logo"
                  height="400"
                  width="142"
                  loading="lazy"
                /> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
