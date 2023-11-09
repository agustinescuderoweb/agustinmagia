import React from 'react'
import '/app/Inicio/page.css'
import Image from 'next/image'
import agustinmagia from '@/public/agustinmagia.jpg'
import cursodemagia from '@/public/cursodemagia.png'
import magiasalon from '@/public/magiasalon.jpg'

function page() {
  return (
    <section>
    <section className='inicio'>
    <div className='card'>
      <div className='imagen'>
     <Image src={agustinmagia} width={150} />
     </div>
    <h1>Agustín Magia</h1>
    <p>Conoce todo sobre Agustín Magia</p>
    </div>

    <div className='card'>
    <div className='imagen'>
    <Image src={magiasalon} width={150} />
    </div>
    <h1>Presentaciones</h1>
    <p>Conoce todo sobre Presentaciones y Eventos</p>
    </div>

    <div className='card'>
    <div className='imagen'>
    <Image src={cursodemagia} width={150} />
    </div>
    <h1>Cursos</h1>
    <p>Conoce todo sobre los Cursos</p>
    </div>
    </section>
    <footer className='footer'>
      <p>&Copy; 2023 AgustinMagia.com</p>
      <p>Contacto: agustinmagia7@gmail.com</p>
    </footer>
    </section>
  )
}

export default page
