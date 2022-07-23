import Head from 'next/head';
import AltLayout from '../components/AltLayout/AltLayout';
import Terminos from '../components/Terminos';

export default function Terms() {
  return (
    <>
      <Head>
        <title>
          Terminos y Condiciones - Sarpin - Security & Web Development
        </title>
      </Head>
      <AltLayout>
        <Terminos />
      </AltLayout>
    </>
  );
}
