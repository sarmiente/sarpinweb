import Image from 'next/image';
import React from 'react';

const Nosotros = ({
  listUser = [
    {
      name: 'Localizaciones',
      number: 'Cartagena - Barranquilla',
      icon: '/assets/Icon/location_icon.svg',
    },
    {
      name: 'Envios',
      number: 'A todos las ciudades',
      icon: '/assets/Icon/shipping_icon.svg',
    },
    {
      name: 'Proyectos',
      number: '+20 completados',
      icon: '/assets/Icon/projects_icon.svg',
    },
  ],
}) => {
  return (
    <div
      className="w-full md:pt-10 mt-8 mb-3 sm:mt-14 sm:mb-14 px-6 lg:px-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-100"
      id="nosotros"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex w-full justify-end">
          <div className="h-auto w-full p-2 opacity-90">
            <Image
              src="/assets/nosotros_image.svg"
              alt="Team"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center ml-auto w-full">
          <h3 className="sm:text-5xl text-3xl text-white-500">
            Nuestro compromiso es impulsar el uso de tecnologia de vanguardia.
          </h3>
          <p className="my-2 text-white-300 sm:text-2xl text-sm ">
            Buscamos trabajar de la manera mas efectiva para exceder las
            expectativas de nuestros clientes.
          </p>
          <p className="my-2 text-white-300 sm:text-2xl text-sm ">
            Nos dedicamos a la venta, instalacion y mantenimiento de sistemas
            cerrados de television, sistemas de automatizacion y domotica para
            negocios y hogares colombianos.
          </p>
          <h4 className="sm:text-3xl text-2xl my-2 text-white-500">
            Ventajas de trabajar con nosotros
          </h4>
          <ul className="text-white-300 mt-3 self-start list-inside ml-8 mb-8">
            <li className="relative circle-check custom-list">
              Tecnologia de Innovacion.
            </li>
            <li className="relative circle-check custom-list">
              Productos y servicios de calidad.
            </li>
            <li className="relative circle-check custom-list">
              Eficiencia en ejecucion.
            </li>
            <li className="relative circle-check custom-list">
              Personal altamente calificado.
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-8 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10 mb-5">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-4 w-8/12 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex w-full mx-auto md:w-auto">
                <div className="flex items-center justify-center bg-gray-500 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.name}
                  </p>
                  <p className="text-sm text-black-500">{listUsers.number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
