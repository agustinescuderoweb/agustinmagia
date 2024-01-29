import React from 'react'
import './footer.css'
import Image from 'next/image'
import whatsaap from '../../public/whatsapp.svg'
import instagram from '../../public/instagram.svg'
import Link from 'next/link'

function footer() {
  return (
    <div>
        <footer className='footer'>
            <div>
              <div className='icons'>
              <Link href={'https://www.instagram.com/agustinmagia/'}>
                <Image className='instagram' width={20} src={instagram}/>
                </Link>
              <Link href={'https://wa.link/qk6cvj'}>
                <Image className="whatsaap" width={20} src={whatsaap}/>
                </Link>
              </div>
                <p>Derechos Reservados a agustinmagia</p>
            </div>
        </footer>
    </div>
  )
}

export default footer