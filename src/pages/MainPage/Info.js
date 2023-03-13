import React from 'react'

const Info = () => {
  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <h1 className='text-center text-3xl font-bold'>Who am I</h1>

        <div className='h-[300px] w-[300px] bg-black rounded-full border-[3px] border-green-500 text-white flex justify-center flex-col items-center'>
          <p>Name: Some Person</p>
          <p>Email: someperson@gmail.com</p>
          <p>Tel: 9777777777</p>
          <p>Age: 50</p>
          <p>Experience:python, java, dart</p>
        </div>
      </div>

      <div className='relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,160L1440,128L1440,320L0,320Z"></path>
        </svg>
        <div className='absolute bottom-0 text-white ml-[50%] mb-[1%] text-2xl '>
          <h1>Developed By</h1>
          <p>Soemone</p>
        </div>
      </div>

    </div>

  )
}

export default Info
