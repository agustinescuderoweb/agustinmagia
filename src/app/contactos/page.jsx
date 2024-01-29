import React from 'react'
import './page.css'
import Link from 'next/link'
import whatsaapwhite from '../../../public/whatsappwhite.svg'
import instagramwhite from '../../../public/instagramwhite.svg'
import Image from 'next/image'


function contacto() {
  return (
    <section className='sectioncontactos'>
      <div className='formulario'>
        <h2>Enviame tu mensaje!</h2>
        <form action="https://formsubmit.co/agustinmagia7@gmail.com" method="POST">
            <div className='input'>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre"
            name='nombre' required></input> <br></br>
            </div>
            
            <div className='input'>
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido"
            name="apellido" required></input><br></br>
            </div>

            <div className='input'>
            <label for="correo">Correo:</label>
            <input type="email" id="correo"
            name="correo" required></input><br></br>
            </div>

            <div className='input'>
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br></br>
            </div>

            <input type="submit" value="Enviar"></input>
        </form>
    </div>
    <div className='redessociales'>
          <h1>Sigue Mis Redes Sociales!</h1>
          <div className='iconos'>
          <Link href={'https://www.instagram.com/agustinmagia/'}>
          <Image className='instagram' width={50} src={instagramwhite}></Image>
          </Link>
          <Link href={'https://wa.link/qk6cvj'}>
          <Image className="whatsaap" width={50} src={whatsaapwhite}></Image>
          </Link>
          </div>
         </div>
    </section>
  )
}

export default contacto