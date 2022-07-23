import AltLayout from '../components/AltLayout/AltLayout';
import Politicas from '../components/Politicas';
import Head from 'next/head';

export default function Policy() {
  return (
    <>
      <Head>
        <title>
          Politicas de privacidad - Sarpin - Security & Web Development
        </title>
      </Head>
      <AltLayout>
        <Politicas />
      </AltLayout>
    </>
  );
}
