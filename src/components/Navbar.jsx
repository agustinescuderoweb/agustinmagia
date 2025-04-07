'use client'


import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import React, { useState } from 'react';
import logomagia from '../../public/logomagia.png';
import iconmenu from '../../public/list.svg';


function Navbar() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <header className={`head ${navVisible ? 'nav-open' : ''}`}>
        <Image className='logo' src={logomagia} alt='Logo' />
        <button className='abri-menu' id='abrir' onClick={toggleNav}><Image className='imagen' src={iconmenu}></Image></button>
        <nav className={`nav ${navVisible ? 'visible' : ''}`} id="nav">
          <button className='cerrar-menu' id='cerrar' onClick={toggleNav}><Image src={iconmenu}></Image></button>
          <ul className='nav-lista'>
            <li><Link href="/" className="text-styling" onClick={closeNav}><h1 className="styling">Inicio</h1></Link></li>
            <li><Link href="./agustinmagia" className="text-styling" onClick={closeNav}><h1 className="styling">Agustín Magia</h1></Link></li>
            <li><Link href="./presentaciones" className="text-styling" onClick={closeNav}><h1 className="styling">Presentaciones</h1></Link></li>
            <li><Link href="./cursos" className="text-styling" onClick={closeNav}><h1 className="styling">Cursos</h1></Link></li>
            <li><Link href="./contactos" className="text-styling" onClick={closeNav}><h1 className="styling">Contactos</h1></Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;