import React from 'react';

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-100 outline-none rounded-l-full rounded-r-full capitalize bg-gradient-to-r from-blue-500 to-blue-100 text-white-500 transition-all hover:shadow-blue ">
      {children}
    </button>
  );
};

export default ButtonOutline;
