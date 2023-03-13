import React from 'react'
import { FaCss3, FaJava, FaPhp, FaPython, FaReact, FaSwift } from 'react-icons/fa';
const Tech = () => {
  return (
    <div>

      <h1 className='text-center text-3xl font-bold md:p-4'>Technologies I use</h1>

      <div className='p-10 grid grid-cols-6 gap-16 justify-items-center md:grid-cols-2 ms:grid-cols-1 '>
        <FaReact size={150} className='hover:scale-125 hover:text-rose-400 duration-200' />
        <FaPython size={150} className='hover:text-blue-500' />
        <FaPhp size={150} className='hover:text-green-400' />
        <FaJava size={150} className='animate-pulse hover:text-yellow-400 duration-75
        ' />
        <FaCss3 size={150} className='hover:text-red-600' />
        <FaSwift size={150} className='hover:text-orange-500' />
      </div>

    </div>
  )
}

export default Tech