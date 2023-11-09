import React from 'react'
import Image from 'next/image'
import agustinmagia from '@/public/agustinmagia.jpg'
import '@/app/Sobre-AgustinMagia/page.css'

function sobre() {
  return (
    <section>
    <div className='imagen'>
      <Image className='agustinmagia' src={agustinmagia} ></Image>
    </div>
    <div className='parrafo'>
      <p>Agustín Magia. Abre las puertas de lo
        desconocido y te invita a disfrutar un momento
        único.<br></br>
        Con más de 7 años de experiencia, la ilusión
        es visible con un estilo elegante tanto para
        público adulto como para los más pequeños.
        Efectos ingeniosos y delicada prestidigitación
        llena de misterio y asombro creando un
        ambiente de total incertidumbre.
        Sólo resta sentarse comodamente, disfrutar
        y dejarse llevar por una sola palabra.
        ¡MAGIA!
      </p>
    </div>
    <footer className='footer'>
      <p>&Copy; 2023 AgustinMagia.com</p>
      <p>Contacto: agustinmagia7@gmail.com</p>
    </footer>
    </section>
  )
}

export default sobre
