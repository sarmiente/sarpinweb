import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Carousel from '../components/Carousel';
import Servicios from '../components/Servicios';
/* import Proyectos from '../components/Proyectos'; */
import Hero from '../components/Hero';
import Proyectos from '../components/Proyectos';
import { Html } from 'next/document';

export default function Home() {
  return (
    <>
    <Html lang="es">
      <main>
        <Head>
          <title>
            Sarpin - Soluciones Integrales en Sistemas de Seguridad & Desarrollo
            Web
          </title>
          <meta
            name="description"
            content="Ofrecemos soluciones integrales en tecnología de sistemas de seguridad y desarrollo web. Barranquilla, Colombia."
          />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      </main>
      <Layout>
        <Carousel />
        <Hero />

        <Servicios />
        <Proyectos />
      </Layout>
      </Html>
    </>
  );
}
