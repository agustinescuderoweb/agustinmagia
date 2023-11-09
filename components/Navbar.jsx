'use client'


import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import React, { useState } from 'react';
import logomagia from '@/public/logomagia.png';


 
function Navbar() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header className={`head ${navVisible ? 'nav-open' : ''}`}>
        <Image className='logo' src={logomagia} alt='Logo' />
        <button className='abri-menu' id='abrir' onClick={toggleNav}>abrir</button>
        <nav className={`nav ${navVisible ? 'visible' : ''}`} id="nav">
          <button className='cerrar-menu' id='cerrar' onClick={toggleNav}>Cerrar</button>
          <ul className='nav-lista'>
            <li><Link href="/Inicio">Inicio</Link></li>
            <li><Link href="/Sobre-AgustinMagia">Sobre Agustín-Magia</Link></li>
            <li><Link href="/Presentaciones">Presentaciones</Link></li>
            <li><Link href="/Cursos">Cursos</Link></li>
            <li><Link href="/Contactos">Contactos</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;
