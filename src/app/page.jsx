import React from 'react'
import Image from 'next/image'
import agustinmagia from '../../public/agustinmagia.jpg'
import magiasalon from '../../public/magiasalon.jpg'
import aprendemagia from '../../public/aprendemagia.png'
import './page.css'
import Link from 'next/link'
import { CircleArrowOutUpRight }  from 'lucide-react' 


function page() {
  return (
    <section className='hero'>
    <div className="card">
         <Image src={agustinmagia} width={300} className="card-img-top" alt="..."></Image>
         <div className="card-body">
         <h5 className="card-title">Agustín Magia</h5>
          <p className="card-text">Conoce todo sobre <br></br> Agustín Magia</p>
          <Link href="./agustinmagia" className="btn btn-primary"><div>< CircleArrowOutUpRight size={20} /></div> Ir a Agustín Magia</Link>
        </div>
        </div>
        <div className="card">
         <Image src={magiasalon} width={300} className="card-img-top" alt="..."></Image>
         <div className="card-body">
         <h5 className="card-title">Presentaciones</h5>
          <p className="card-text">Conoce todo sobre Presentaciones</p>
          <Link href="./presentaciones" className="btn btn-primary"><div>< CircleArrowOutUpRight size={20} /></div> Ir a Presentaciones</Link>
        </div>
        </div>
        <div className="card">
         <Image src={aprendemagia} width={300} className="card-img-top" alt="..."></Image>
         <div className="card-body">
         <h5 className="card-title">Cursos</h5>
          <p className="card-text">Conoce todo sobre, <br></br> Cursos</p>
          <Link href="./cursos" className="btn btn-primary"><div>< CircleArrowOutUpRight size={20} /></div> Ir a Cursos</Link>
        </div>
        </div>
  </section>
  )
}

export default page
