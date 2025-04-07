import React from 'react';
import './page.css';
import Link from 'next/link';
import Image from 'next/image';
import whatsappWhite from '../../../public/whatsappwhite.svg';
import instagramWhite from '../../../public/instagramwhite.svg';

function Contacto() {
  return (
    <section className="sectioncontactos">
      <div className="formulario">
        <h2>¡Envíame tu mensaje!</h2>
        <form action="https://formsubmit.co/agustinmagia7@gmail.com" method="POST">
          <div className="input">
            <label htmlFor="nombre"></label>
            <input className='text' type="text" id="nombre" name="nombre" placeholder='Nombre' required />
          </div>

          <div className="input">
            <label htmlFor="apellido"></label>
            <input className='text' type="text" id="apellido" name="apellido" placeholder='Apellido' required />
          </div>

          <div className="input">
            <label htmlFor="correo"></label>
            <input className='text' type="email" id="correo" name="correo" placeholder='Correo' required />
          </div>

          <div className="input">
            <label htmlFor="mensaje"></label>
            <textarea className='mensaje' id="mensaje" name="mensaje" placeholder='Mensaje' rows="4" required></textarea>
          </div>

          <input type="submit" value="Enviar" className="button" />
        </form>
      </div>

      <div className="redessociales">
        <h1>¡Sigue mis redes sociales!</h1>
        <div className="iconos">
          <Link href="https://www.instagram.com/agustinmagia/" target="_blank">
            <Image
              className="instagram"
              width={30}
              height={30}
              src={instagramWhite}
              alt="Instagram"
            />
          </Link>
          <Link href="https://wa.link/qk6cvj" target="_blank">
            <Image
              className="whatsapp"
              width={30}
              height={30}
              src={whatsappWhite}
              alt="WhatsApp"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
