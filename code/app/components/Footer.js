import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 text-white px-4 h-20 flex items-center justify-center ">
      <p className="text-center">
        Copyright &copy; {currentYear} Get me A Chai - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
