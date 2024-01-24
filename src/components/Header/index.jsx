import React from 'react'

const Header = () => {
  return (
    <div className='gap-12'>
    <div className='max-w-screen-2xl mx-auto xl:px-24 px-4 bg-[#10101E] md:py-20 py-24'>
        <h1 className='text-5xl font-bold text-white mb-3 ml-32'>FIND BEST TALENT  <div className='text-white'><span className='text-[#DBFF00]'>& </span>BEST WORK</div></h1>


        <div className='flex flex-cols items-center justify-center ml-4 md:ml-28 gap-16 mt-12'>
          <button className='bg-blue-500 px-6 rounded-full  text-2xl text-white'>Find Tallent</button>
          <button className='bg-blue-500 px-6 rounded-full  text-2xl text-white'>Find Work</button>
      
        </div>

        <h3 className='text-2xl font-bold text-white flex justify-center mt-24 gap-8'>Top Skills Categories</h3>
      
</div>

</div>



  )
}

export default Header