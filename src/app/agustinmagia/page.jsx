import React from 'react'
import Image from 'next/image'
import agustin from '../../../public/agustinmagia.jpg'
import '@/app/agustinmagia/page.css'
import Link from 'next/link'
import { Zap, Wand, CirclePlus} from 'lucide-react' 

function agustinmagia() {
  return (
    <section className='contenedor'>
      <div className='seccion'>
       <Image className='agustinmagia' src={agustin}></Image>
       <div className='texto'>
       <h1>Agustín Magia</h1> <div className='rayo'>< Zap /></div>
       <p>Agustín Magia. Abre las puertas de lo
  desconocido y te invita a disfrutar un momento
  único. Con más de 12 años de experiencia, la ilusión
  es visible con un estilo elegante.<br></br>
  Efectos ingeniosos y prestidigitación
  llena de asombro creando un
  ambiente de total misterio.
  <br></br>
  </p> <div className='rab'>< Wand /></div>
  <div className='boton'>
  <Link href="./contactos" className="btn btn-primary"><div><CirclePlus /></div>Más Info</Link>
  </div>
  </div>
  </div>
    </section>
  )
}

export default agustinmagia