import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function Blog() {
  return (
    <>
    <Head>
    <title>Digiency - Blog page</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/logo.png" />
  </Head>
    <div className='bg-[#FFF7F4] md:h-[200px] relative p-4 text-center '>
      <h1 className='text-3xl font-bold'>Our Blog</h1>
    </div>

    <div className="mt-[80px] flex items-center md:justify-around flex-col md:flex-row ">
        <div className='grid grid-cols-1 gap-[100px] md:grid-cols-2'>
            <div className="flex flex-col items-center  ">
                <div>
                    <Image width={550} height={250} alt="icon" src="/blogimg.png" className=''/>
                    <div className='md:w-[550px] p-2'>
                        <h1 className='font-bold text-2xl'>35 Stellar Graphics design Blogs to Keep You Educated and Inspired</h1>
                        <p className='text-sm'>Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.
                             Start by creating a new Next.js project</p>
                             <div><Image width={120} height={250} alt="icon" src="/Read more.png" className='w-[120px]'/></div>
                    </div>
                </div>

                <div>
                <Image width={550} height={250} alt="icon" src="/blogimg2.png" className='md:w-[550px] h-[300px]'/>
                    <div className='md:w-[550px] p-2'>
                        <h1 className='font-bold text-2xl'>35 Stellar Graphics design Blogs to Keep You Educated and Inspired</h1>
                        <p className='text-sm'>Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.
                             Start by creating a new Next.js project</p>
                             <div><Image width={120} height={250} alt="icon" src="/Read more.png" className='w-[120px]'/></div>
                    </div>
                </div>

                <div>
                <Image width={550} height={250} alt="icon" src="/blogimg1.png" className='md:w-[550px] h-[300px]'/>
                    <div className='md:w-[550px] p-2'>
                        <h1 className='font-bold text-2xl'>35 Stellar Graphics design Blogs to Keep You Educated and Inspired</h1>
                        <p className='text-sm'>Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.
                             Start by creating a new Next.js project</p>
                             <div><Image width={120} height={250} alt="icon" src="/Read more.png" className='w-[120px]'/></div>
                    </div>
                </div>

                <div>
                <Image width={550} height={250} alt="icon" src="/blogimg4.png" className='md:w-[550px] h-[300px]'/>
                    <div className='md:w-[550px] p-2'>
                        <h1 className='font-bold text-2xl'>35 Stellar Graphics design Blogs to Keep You Educated and Inspired</h1>
                        <p className='text-sm'>Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.
                             Start by creating a new Next.js project</p>
                             <div><Image width={120} height={250} alt="icon" src="/Read more.png" className='w-[120px]'/></div>
                    </div>
                </div>
                <div>
                <Image width={550} height={250} alt="icon" src="/blogimg5.png" className='md:w-[550px] h-[300px]'/>
                    <div className='md:w-[550px] p-2'>
                        <h1 className='font-bold text-2xl'>35 Stellar Graphics design Blogs to Keep You Educated and Inspired</h1>
                        <p className='text-sm'>Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.
                             Start by creating a new Next.js project</p>
                             <div> <Image width={120} height={250} alt="icon" src="/Read more.png" className=''/></div>
                    </div>
                </div>

            </div>

            <div>
               
               <div className='p-2'>
                <div>
                    <input type="text" placeholder="Search" className='shadow p-2 md:w-[230px]'/>
                </div>

                <div className='md:w-[230px]  shadow mt-[20px] p-4'>
                    <h1 className='font-bold mb-[20px]'>Latest Post</h1>
                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex items-center gap-[25px]'>
                        <Image width={50} height={250} alt="icon" src="/blogimg6.png"/>
                            <h3 className='text-1xl text-sm'>Good design makes <br/> me happy</h3>
                        </div>

                        <div className='flex items-center gap-[25px]'>
                        <Image width={50} height={250} alt="icon" src="/blogimg6.png"/>
                            <h3 className=' text-sm'>Best 27 design Blogs  <br/> for 2021</h3>
                        </div>

                        <div className='flex items-center gap-[25px]'>
                        <Image width={50} height={250} alt="icon"src="/blogimg6.png"/>
                            <h3 className=' text-sm'>Minimal Post With a <br/>Preview Image</h3>
                        </div>

                        <div className='flex items-center gap-[25px]'>
                        <Image width={50} height={250} alt="icon" src="/blogimg6.png"/>
                            <h3 className=' text-sm'>Good design <br/>makes me</h3>
                        </div>
                        <div className='flex items-center gap-[25px]'>
                        <Image width={80} height={250} alt="icon" src="/blogimg6.png"/>
                            <h3 className=' text-sm'>Creative way to make design <br/>for 2021</h3>
                        </div>
                    </div>

                </div>


                <div className='md:w-[230px]  shadow mt-[20px] p-4'>
                    <h1 className='font-bold mb-[20px]'>Categories</h1>
                    <div className='flex flex-col gap-[15px]'>
                        
                        <ul className='flex flex-col gap-[15px] text-sm'>
                            <li>Business</li>
                            <li>Design Blog</li>
                            <li>UI/UX Design</li>
                            <li>App Development</li>
                            <li>Graphics Design</li>
                        </ul>
                        

                       

                      
                        
                    </div>

                </div>

                <div className='md:w-[230px]  shadow mt-[20px] p-2'>
                    <h1 className='font-bold mb-[20px]'>Tags</h1>
                    <div className='flex flex-col gap-[15px]'>
                        
                        <ul className='flex flex-col gap-[15px] text-sm'>
                            <li className='bg-[#FFF7F4] w-[150px] p-1 flex items-center justify-center'>Business</li>
                            <li className='bg-[#FFF7F4] w-[150px] p-1 flex items-center justify-center'>Design Blog</li>
                            <li className='bg-[#FFF7F4] w-[150px] p-1 flex items-center justify-center'>Technology</li>
                            <li className='bg-[#FFF7F4] w-[150px] p-1 flex items-center justify-center'>App Development</li>
                            <li className='bg-[#FFF7F4] w-[150px] p-1 flex items-center justify-center'>Web Design</li>
                        </ul>
                        

                       

                      
                        
                    </div>

                </div>
               </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Blog
