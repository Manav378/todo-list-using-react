import React from 'react'

const navbar = () => {
  return (
    <nav>
      <div className="main flex list-none bg-gray-600 p-3 justify-between">
        <div>
          <div className='font-bold text-white'>I-TASK</div>
        </div>
    <div className='flex gap-4 font-bold text-white mr-10'>
        <li className='  hover:text-[20px] cursor-pointer h-[5vh] w-[6vw]'>Home</li>
        <li  className='  hover:text-[20px] cursor-pointer h-[5vh] w-[6vw]'>About</li>
        <li className='  hover:text-[20px] cursor-pointer h-[5vh] w-[6vw]'>Contact</li>
        </div>
       
      </div>
    </nav>
  )
}

export default navbar
