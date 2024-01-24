import React from 'react'

const Navbar = () => {
  return (
    <header className='max-w-screen-2xl container mx-auto bg-[#10101E] xl:px-24 px 4'>
        <nav className='flex items-center justify-between py-4'>
            <a href ="/" className='flex items-center gap-0 text-xl text-[#DBFF00]'><span className='font-bold'>BLOCK</span><span className='text-[#DBFF00]'>OPUS</span></a>
            <ul className='hidden md:flex gap-8 text-white'>
              <li>Home</li>
              <li>Find work</li>
              <li>Freelancers</li>
              <li>Why BlockOpus</li>
              <li><button className='bg-[#DBFF00] px-6 text-black font-bold rounded'>Login </button></li>
              <li><button className='bg-[#DBFF00] px-6 text-black font-bold rounded'>Sign Up</button></li>
            </ul>
          
  

          
    </nav>
    </header>
  )
}


export default Navbar