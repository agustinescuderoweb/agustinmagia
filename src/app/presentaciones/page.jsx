import React from 'react'
import magiadecerca from '../../../public/magiacerca.jpg'
import magiasalon from '../../../public/magiasalon.jpg'
import magiabares from '../../../public/bares.jpg'
import Image from 'next/image';
import './page.css'
import Link from 'next/link';


function presentaciones () {
  return (
    <section className='sections'>
      <div className='section'>
        <div className='magiadecerca'>
       <Image className='magiacerca' src={magiadecerca}></Image>
       <div className='secciontexto'>
       <h1>MAGIA DE CERCA</h1>
       <p>Presentaciones pensadas para 
         distacias cortas a centímetros de la vista del espectador. 
         La manipulación de objetos pequeños como cartas, monedas, 
         pañuelos, bolas de esponjas....
         Son los protagonistas de un momento único.</p>
         <Link href="./contactos" className="btn btn-primary">+ Más Info</Link>
         </div>
  </div>
  </div>
  <div className='magiasalon'>
      <Image className='magiasalonimagen' src={magiasalon}></Image>
      <div className='secciontexto'>
      <h1>MAGIA DE SALÓN</h1>
      <p>Presentaciones que requieren un
         número mayor de espectadores. La participación de
         los presentes, más un clima de profundo misterio
         generan un ambiente de completa sorpresa...</p>
         <Link href="./contactos" className="btn btn-primary">+ Más Info</Link>
         </div>
    </div>
    <div className='magiabares'>
      <Image className='magiabaresimagen' src={magiabares}></Image>
      <div className='secciontexto'>
      <h1>MAGIA PARA BARES/RESTORANES</h1>
      <p>
         Efectos de magia exclusivos para espacios
         reducidos llenan de asombro y misterio a todos aquellos que
         deseen disfrutar de un momento diferente.</p>
         <Link href="./contactos" className="btn btn-primary">+ Más Info</Link>
         </div>
    </div>
    </section>
  )
}

export default presentaciones;