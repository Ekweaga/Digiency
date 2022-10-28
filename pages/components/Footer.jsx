import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-[#373737] md:h-[250px] mt-[50px] text-white flex items-center justify-center ">

      <div className='grid grid-cols-1 md:grid-cols-4 p-4 gap-[30px]'>
        <div>
          <h1 className="text-2xl font-bold mb-[20px] "><span className="text-[#FF5300]">Digi</span>ency</h1>

          <p className="text-sm mb-[20px]">Start by creating a new Next.js project if you don’t .
             The most common approach is to use Create Next App</p>
             <img src="/Socila Icon.png"  className="h-[40px]"/>
        </div>
        <div>
          <h1 className=" font-bold mb-[20px]">Company</h1>
          <ul className='text-sm flex flex-col gap-[10px]'>
            <li>About Us</li>
            <li>Blog</li>
            <li>Our Work</li>
            <li>Client</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
        <h1 className=" font-bold mb-[20px]">Services</h1>
          <ul className='text-sm flex flex-col gap-[10px]'>
            <li>About Us</li>
            <li>Blog</li>
            <li>Our Work</li>
            <li>Client</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className=" font-bold mb-[20px]">Newsletter</h1>
          <p className="text-sm">hgkdfdkfdkfdkfdfdfdffd</p>
          <div className="flex items-center mt-[20px]">
            <input type="email" placeholder='email' className='p-2 border border-2-[#FF5300] bg-transparent'/> <button className="bg-[#FF5300] text-white p-2 shadow w-[100px] flex items-center justify-center"><img src="/send-plane-fill.png"/></button>
          </div>
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default Footer
