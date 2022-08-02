import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Carousel from '../components/Carousel';
import Servicios from '../components/Servicios';
/* import Proyectos from '../components/Proyectos'; */
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarpin - Security & Web Development</title>
      </Head>
      <Layout>
        <Carousel />
        <Hero />

        <Servicios />
        {/* <Proyectos /> */}
      </Layout>
    </>
  );
}
