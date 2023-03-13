import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center gap-5 px-11 md:grid-cols-1'>


      <div className='h-[450px]'>
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_kvwtrk4n.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>

      <div className='md:text-center'>
        <h1 className='text-3xl font-extrabold'>Hi I am John</h1>
        <p className='py-2 text-rose-500 text-lg'>Some Dev, Freelancer, Rounder</p>
        <p className='md:text-justify sm:text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore est. Vitae maxime quaerat adipisci, doloremque temporibus quasi rerum molestias ullam aliquid iure ex illum consectetur iste, velit exercitationem cum modi dolorem ratione fugiat beatae dolore, incidunt magnam similique repudiandae. Eveniet harum blanditiis rerum consequatur deserunt praesentium, quisquam sapiente velit.</p>
      </div>

    </div>
  )
}

export default Display