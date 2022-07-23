import Footer from '../Layout/Footer';
import AltHeader from '../AltLayout/AltHeader';

const AltLayout = ({ children }) => {
  return (
    <>
      <AltHeader />
         {children}
      <Footer />
    </>
  );
};

export default AltLayout;