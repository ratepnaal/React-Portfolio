import React from 'react'

const HireMe = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Hire <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-5 text-lg'>Do You Have Any Work ? </p>
      </div>
      <div className='bg-gray-700 relative px-6 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-20
      flex justify-center items-center'>
        <div>
          <h2 className='md:text-2xl text-xl font-semibold'>Do You Want Any Work From Me ? </h2>
          <p className='max-w-lg text-sm mt-6 text-gray-200 leading-6 '>
          I am a third-year Information Technology student specializing in front-end development.
           I recently completed a two-month internship at Mad Solution Software Company,
            gaining hands-on experience. I am proficient in HTML, CSS, Tailwind CSS, JavaScript, React.js.
              I am committed to continuous learning and actively seeking a Junior Front-End Developer
              position.
          </p>
          <div className='flex items-center justify-center mt-3'>
          <a href='#contact'><button className='btn-primary  mt-8'> Say Hello </button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireMe