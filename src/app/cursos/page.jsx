import React from 'react'
import Image from 'next/image'
import aprendemagia from '../../../public/aprendemagia.png'
import './page.css'
import Link from 'next/link'
import { Zap, Wand, CirclePlus} from 'lucide-react' 

function Cursos() {
  return (
    <section className='curso'>
        <div className='cursobasico'>
          <div className='imagenescursos'>
            <Image className='aprendemagia' alt='aprendemagia' src={aprendemagia} />
            </div>
            <div className='parrafo'>
            <h1>Aprende Magia</h1>
            <p>
               Este curso esta destinado a quienes desee adentrarse al mundo de la magia. <br></br> El curso tiene como objetivo enseñarte secretos simples y de gran impacto, para que puedas disfrutar con tus amigo, conocidos y familiares. <br></br><br></br></p>
            </div>
            </div>
            <div className='temario'>
              <p>
               El Curso se divide en 4 módulos. <br></br><br></br>
               Primer Módulo - Introducción a la Magia. Aprenderás historia de la magia, principios vocabulario mágico y teoría. <br></br><br></br>
               Segundo Módulo - Magia con Monedas. Aprenderás 2 técnicas + 3 juegos de magia con monedas. <br></br><br></br>
               Tercer Módulo - Magia con Cartas. Aprenderás 2 técnicas + 3 juegos de magia con cartas. <br></br><br></br>
               Cuarto Módulo - Magia de Cerca. Aprenderás  2 técnicas + 3 juegos de magia con diferentes objetos cotidianos. <br></br> <br></br>
               Curso esta pensado para que puedas completarlo en 2 meses. <br></br> <br></br>
               Recibirás un E-book con el contenido teórico y práctico. Más los videos en formato MP4 para que puedas observar y estudiar los movimientos. <br></br><br></br>
               El Curso es simple, sencillo y fácil de entender. </p>
               <div className='boton'>
               <Link href={'https://wa.link/qk6cvj'} className="btn btn-primary"><div><CirclePlus /></div>Más Info</Link>
               </div>
        </div>
    </section>
  )
}

export default Cursos