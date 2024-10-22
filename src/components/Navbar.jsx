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
            <li><Link href="/" className="link-styling" onClick={closeNav}>Inicio</Link></li>
            <li><Link href="./agustinmagia" className="link-styling" onClick={closeNav}>Sobre Agustín-Magia</Link></li>
            <li><Link href="./presentaciones" className="link-styling" onClick={closeNav}>Presentaciones</Link></li>
            <li><Link href="./cursos" className="link-styling" onClick={closeNav}>Cursos</Link></li>
            <li><Link href="./contactos" className="link-styling" onClick={closeNav}>Contactos</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;