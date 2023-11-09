import React from 'react'
import Image from 'next/image'
import magiacerca from '@/public/magiacerca.jpg'
import magiasalon from '@/public/magiasalon.jpg'

function presentaciones() {
  return (
    <section>
    <div>
      <Image src={magiacerca}></Image>
      <p>MAGIA DE CERCA. Presentaciones pensadas para 
         distacias cortas a centímetros de la vista del espectador. 
         La manipulación de objetos pequeños como cartas, monedas, 
         pañuelos, bolas de esponjas....
         Son los protagonistas de un momento único.</p>
    </div>
    <div>
      <Image src={magiasalon}></Image>
      <p>MAGIA SALON. Presentaciones que requieren un
         número mayor de espectadores. La participación de
         los presentes, más un clima de profundo misterio
         generan un ambiente de completa sorpresa...</p>
    </div>

    </section>
  )
}

export default presentaciones
