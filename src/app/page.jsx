import React from 'react'
import Image from 'next/image'
import agustinmagia from '../../public/agustinmagia.jpg'
import magiasalon from '../../public/magiasalon.jpg'
import cursodemagia from '../../public/cursodemagia.jpg'
import './page.css'
import Link from 'next/link'


function page() {
  return (
    <section className='hero'>
    <div className="card">
         <Image src={agustinmagia} width={300} className="card-img-top" alt="..."></Image>
         <div className="card-body">
         <h5 className="card-title">Agustín Magia</h5>
          <p className="card-text">Conoce todo sobre Agustín Magia</p>
          <Link href="./agustinmagia" className="btn btn-primary">Ir a Agustín Magia</Link>
        </div>
        </div>
        <div className="card">
         <Image src={magiasalon} width={300} className="card-img-top" alt="..."></Image>
         <div className="card-body">
         <h5 className="card-title">Presentaciones</h5>
          <p className="card-text">Conoce todo sobre Presentaciones</p>
          <Link href="./presentaciones" className="btn btn-primary">Ir a Presentaciones</Link>
        </div>
        </div>
        <div className="card">
         <Image src={cursodemagia} width={300} className="card-img-top" alt="..."></Image>
         <div className="card-body">
         <h5 className="card-title">Cursos</h5>
          <p className="card-text">Conoce todo sobre los Cursos</p>
          <Link href="./cursos" className="btn btn-primary">Ir a Cursos</Link>
        </div>
        </div>
  </section>
  )
}

export default page
