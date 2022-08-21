import React from 'react';

const ButtonWP = ({ children }) => {
  return (
    <button className="flex items-center font-medium tracking-wide px-4 sm:px-8 border border-blue-100 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize bg-gradient-to-r from-blue-500 to-blue-100 text-white-500 transition-all hover:shadow-blue ">
      {children}
    </button>
  );
};

export default ButtonWP;
