import React from 'react'
import Image from 'next/image'
import agustin from '../../../public/agustinmagia.jpg'
import '@/app/agustinmagia/page.css'
import Link from 'next/link'


function agustinmagia() {
  return (
    <section className='contenedor'>
      <div className='seccion'>
       <Image className='agustinmagia' src={agustin}></Image>
       <div className='texto'>
       <h1>Agustín Magia</h1>
       <p>Agustín Magia. Abre las puertas de lo
  desconocido y te invita a disfrutar un momento
  único. Con más de 12 años de experiencia, la ilusión
  es visible con un estilo elegante.
  Efectos ingeniosos y prestidigitación
  llena de asombro creando un
  ambiente de total misterio.
  Sólo resta sentarse comodamente, disfrutar
  y dejarse llevar por una sola palabra.
  ¡MAGIA!</p>
  <div className='boton'>
  <Link href="./contactos" className="btn btn-primary">+ Más Info</Link>
  </div>
  </div>
  </div>
    </section>
  )
}

export default agustinmagia