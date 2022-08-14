import React from 'react';

const Servicios = () => {
  return (
    <div
      className="mt-20 mb-10 py-10 bg-white-500 overflow-hidden"
      id="servicios"
    >
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div>
          <span className="block w-max mx-auto py-2 px-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-100 text-black-600 text-sm  mb-10">
            <h2 className=" text-center text-2xl font-bold md:text-3xl">
              Nuestros servicios
            </h2>
          </span>
          <h2 className="mt-4 mb-12 text-center text-2xl text-yellow-900 font-bold md:text-4xl">
            Ofrecemos la mejor tecnologia para garantizar una excelente
            <br className="lg:block" hidden /> seguridad y proteccion de tus
            bienes
          </h2>
        </div>
        <div className="mt-16 p-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:-mx-8">
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-gradient-to-r from-blue-500 to-blue-100 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-8 p-4 md:p-8 lg:p-8 xl:p-6">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-600"
              >
                <span className="font-bold text-white-300">1</span>
              </div>
              <div className="space-y-4 group-hover:text-white-500">
                <h4 className="text-2xl text-gray-800 font-medium transition ">
                  Mantenimiento e Instalacion de CCTV
                </h4>
                <p className="text-gray-600 group-hover:text-white-500">
                  Diseño, instalación y mantenimientos preventivos y correctivos
                  en equipos de sistemas de CCTV.
                </p>
                <br />
                <a
                  href="https://wa.me/573053255769"
                  target="_blank"
                  className="group-hover:text-white-500"
                >
                  Saber más
                </a>
              </div>
              {/* <Image
                src={Facebook}
                className="w-16"
                width={50}
                height={50}
                alt="burger illustration"
              /> */}
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-gradient-to-r from-blue-500 to-blue-100 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-8 p-4 md:p-8 lg:p-8 xl:p-6">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-600"
              >
                <span className="font-bold text-white-300">2</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-black-600 font-medium transition group-hover:text-white-500">
                  Control de Acceso y Alarmas de Intrusion
                </h4>
                <p className="text-gray-600 group-hover:text-white-500">
                  Monitorea ingresos y salidas de personal, detecta y controla
                  actividades delictivas dentro y/o fuera de tu espacio.
                </p>
                <br />
                <a
                  className="group-hover:text-white-500"
                  href="https://wa.me/573053255769"
                  target="_blank"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-gradient-to-r from-blue-500 to-blue-100 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-8 p-4 md:p-8 lg:p-8 xl:p-6">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-600"
              >
                <span className="font-bold text-white-500">3</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white-500">
                  Sistema de Deteccion de Incendios
                </h4>
                <p className="text-gray-600 group-hover:text-white-500">
                  Detecte a tiempo la presencia de fuego y emita alarmas para
                  evacuar espacios afectados en el menor tiempo posible.
                </p>
                <br />
                <a
                  className="group-hover:text-white-500"
                  href="https://wa.me/573053255769"
                  target="_blank"
                >
                  Saber más
                </a>
              </div>
              {/* Imagen */}
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-gradient-to-r from-blue-500 to-blue-100 group-hover:scale-105 lg:group-hover:scale-110"
            />
            <div className="relative space-y-8 p-4 md:p-8 lg:p-8 xl:p-6">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-black-600"
              >
                <span className="font-bold text-white-500">4</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white-500">
                  Diseño & Desarrollo de Páginas Web
                </h4>
                <p className="text-gray-600 group-hover:text-white-500">
                  Creamos tu sitio web de acuerdo a tus necesidades, atrae mas
                  clientes con una pagina moderna y atractiva, esta es tu carta
                  de presentacion.
                </p>
                <br />
                <a
                  className="group-hover:text-white-500"
                  href="https://wa.me/573053255769"
                  target="_blank"
                >
                  Saber más
                </a>
              </div>
              {/* Imagen */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
