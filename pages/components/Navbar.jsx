import Image from 'next/image'
import React,{useState} from 'react'


function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='flex items-center justify-between p-[30px] bg-[#FFF7F4] '>
        <div>
            <Image src="/logo.png" width={100} height={100} alt="logo"></Image>
        </div>

        <div>
            <ul className='md:flex items-center gap-[30px] text-sm hidden'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About Us</li> <li className='cursor-pointer'>Our Work</li> <li className='cursor-pointer'>Clients</li> <li>Our Blog</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[500px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={20}></Image>
        </div>
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "left-0 block" : "right-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[200px]">
          <li  onClick={() => setOpen(!open)}>Retail</li>
                
                <li  onClick={() => setOpen(!open)}>Get Started</li>
                <li  onClick={() => setOpen(!open)}>Our Solutions</li>
                <li  onClick={() => setOpen(!open)}>COVID 19</li>
                <li  onClick={() => setOpen(!open)}>CAMPAIGNS</li>
                <li  onClick={() => setOpen(!open)}>RETAIL</li>
                <li  onClick={() => setOpen(!open)}>ABOUT US</li>
               
              
          </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
