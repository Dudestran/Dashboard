import React from 'react'

const Nav = () => {
   return (
    <div className='bg-stone-200 h-20 w-full rounded-sm flex items-center '>
    
      
 
      <div  className='cursor-pointer m-10 h-8 w-400 font-bold bg-stone-200 rounded text-xl'>HOME</div>
      <div className='cursor-pointer m-10 h-8 w-400 font-bold  rounded text-xl'>CONTACT</div>
      <div className=' m-150 h-15 w-40 rounded-xl cursor-pointer bg-cyan-200 flex items-center justify-center'>
        <div class="text-white font-bold text-xl ">DONATE</div>
      </div>
      
    </div>
  )
}

export default Nav