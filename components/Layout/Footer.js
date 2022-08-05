import React from 'react';
import Image from 'next/image';
import LogoHeader from '../../public/assets/newfrontlogo.svg';
import Facebook from '../../public/assets/Icon/facebook.svg';
import LogoWP from '../../public/assets/icon_whatsapp.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';

const Footer = () => {
  return (
    <>
      <div className="mt-28 bg-white-500 pt-10 pb-12">
        <div className=" max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-flow-row m:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-3">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 ">
            <Image src={LogoHeader} />
            <p className="pt-4 pb-4">
              Somos un grupo de jovenes Ingenieros comprometidos con la
              seguridad tecnologica de los hogares y las empresas colombianas.
            </p>
            <p className="pb-4">Cartagena - Barranquilla - Soledad</p>

            <div className="flex">
              <Image src={LogoWP} alt="Logo whatsapp" width={30} />

              <p className="pt-3"> +57 305 325 5769</p>
            </div>
            <div className="flex gap-4 w-full mt-2">
              <div>
                <a
                  href=""
                  className="bg-white-500 rounded-full flex p-2 shadow-lg"
                >
                  <Image src={Facebook} />
                </a>
              </div>
              {/*   <div>
                <a
                  href=""
                  className="bg-white-500 rounded-full flex p-2 shadow-lg"
                >
                  <Image src={Twitter} />
                </a>
              </div> */}
              <div>
                <a
                  href=""
                  className="bg-white-500 rounded-full flex p-2 shadow-lg"
                >
                  <Image src={Instagram} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:col-span-2 lg:col-span-5">
            <div className="mt-4 md:mt-0 md:pl-16 pb-10 grid grid-cols-2 gap-6 sm:grid-cols-2">
              <div>
                <h6 className="text-lg font-medium text-black-600">Menu</h6>
                <ul className="list-inside mt-4 space-y-3">
                  <li>
                    <a href="/" className="hover:text-blue-100 transition">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#nosotros"
                      className="hover:text-blue-100 transition"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#servicios"
                      className="hover:text-blue-100 transition"
                    >
                      Servicios
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/#proyectos"
                      className="hover:text-blue-100 transition"
                    >
                      Proyectos
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://wa.me/573053255769"
                      target="_blank"
                      className="hover:text-blue-100 transition"
                    >
                      Contactenos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-medium text-black-600">Links</h6>
                <ul className="list-inside mt-4 space-y-4">
                  <li>
                    <a
                      href="/politica-de-privacidad"
                      className="hover:text-blue-100 transition"
                    >
                      Politica de privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terminos-y-condiciones"
                      className="hover:text-blue-100 transition"
                    >
                      Terminos y condiciones
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="hover:text-blue-100 transition">
                      Cookies
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14 md:mb-0 flex justify-between px-4 py-3 rounded-md bg-gray-100 text-black-600 text-sm">
        <span>Todos los derechos reservados.</span>

        <span className="font-bold transition hover:text-blue-100" id="year">
          SARPIN &copy; 2022
        </span>
      </div>
    </>
  );
};

export default Footer;
