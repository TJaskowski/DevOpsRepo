import React from 'react';
import logo from '../assets/wsei-logo.png'

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-auto bg-light">
      <div>
        <img src={logo} alt="Logo" width="50" />      
        <p className="mt-2">Autor: Tomasz Jaśkowski - tomasz.jaskowski@microsoft.wsei.edu.pl</p>
      </div>
    </footer>
  );
};

export default Footer;