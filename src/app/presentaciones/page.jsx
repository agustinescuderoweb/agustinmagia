import React from 'react'
import magiadecerca from '../../../public/magiacerca.jpg'
import magiasalon from '../../../public/magiasalon.jpg'
import magiabares from '../../../public/bares.jpg'
import Image from 'next/image';
import './page.css'
import Link from 'next/link';
import { Zap, Wand, CirclePlus} from 'lucide-react' 


function presentaciones () {
  return (
    <section className='sections'>
      <div className='section'>
        <div className='magiadecerca'>
       <Image className='magiacerca' src={magiadecerca}></Image>
       <div className='secciontexto'>
       <h1>MAGIA DE CERCA</h1><div className='rayo'>< Zap /></div>
       <p>Presentaciones pensadas para 
         distacias cortas a centímetros de la vista del espectador. 
         La manipulación de objetos pequeños como cartas, monedas, 
         pañuelos, bolas de esponjas....
         Son los protagonistas de un momento único.</p><div className='rab'>< Wand /></div>
         <Link href="./contactos" className="btn btn-primary"><div><CirclePlus /></div> Más Info</Link>
         <Link href={'https://drive.google.com/file/d/1wBi0I3xVJq5-kfavb6SX5hm93Lh-HNn-/view?usp=drive_link'} className='pdf'>Descargar PDF</Link>
         </div>
  </div>
  </div>
  <div className='magiasalon'>
      <Image className='magiasalonimagen' src={magiasalon}></Image>
      <div className='secciontexto'>
      <h1>MAGIA DE SALÓN</h1><div className='rayo'>< Zap /></div>
      <p>Presentaciones que requieren un
         número mayor de espectadores. La participación de
         los presentes, más un clima de profundo misterio
         generan un ambiente de completa sorpresa...</p><div className='rab'>< Wand /></div>
         <Link href="./contactos" className="btn btn-primary"><div><CirclePlus /></div> Más Info</Link>
         <Link href={'https://drive.google.com/file/d/1wBi0I3xVJq5-kfavb6SX5hm93Lh-HNn-/view?usp=drive_link'} className='pdf'>Descargar PDF</Link>
         </div>
    </div>
    <div className='magiabares'>
      <Image className='magiabaresimagen' src={magiabares}></Image>
      <div className='secciontexto'>
      <h1>MAGIA PARA BARES</h1><div className='rayo'>< Zap /></div>
      <p>
         Efectos de magia exclusivos para espacios
         reducidos llenan de asombro y misterio a todos aquellos que
         deseen disfrutar de un momento diferente.</p><div className='rab'>< Wand /></div>
         <Link href="./contactos" className="btn btn-primary"><div><CirclePlus /></div> Más Info</Link>
         <Link href={'https://drive.google.com/file/d/1kohoVl_ZOFKo_7hmVW0fxzP2J4n6CarG/view?usp=drive_link'} className='pdf'>Descargar PDF</Link>
         </div>
    </div>
    </section>
  )
}

export default presentaciones;