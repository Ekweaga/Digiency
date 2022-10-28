import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between p-[30px] bg-[#FFF7F4] '>
        <div>
            <Image src="/logo.png" width={100} height={100} alt="logo"></Image>
        </div>

        <div>
            <ul className='md:flex items-center gap-[30px] text-sm hidden'>
                <li>Home</li>
                <li>About Us</li> <li>Our Work</li> <li>Clients</li> <li>Our Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
