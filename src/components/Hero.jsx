import React from 'react'
import hero from '../assets/images/hero.png'

const Hero = () => {
  const social_media = [
    {logo:'logo-instagram', link:'https://www.instagram.com/ratepnaal/?igsh=MXdkbTNhaWd2dHUybA%3D%3D#'},
    {logo:'logo-facebook', link:'https://www.facebook.com/ratep.naal.3?mibextid=ZbWKwL'},
    {logo:'logo-linkedin', link:'https://www.linkedin.com/in/rateb-alnaal-a51067314/'},
    { logo:'logo-github' , link:'https://github.com/ratepnaal'},
  ]
  return (
    <section 
    id='home' 
    className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
      <div className='flex-1 flex justify-center items-center h-full'>
        <img src={hero} alt='hero image' className='md:w-11/12 h-full object-cover'></img>
      </div>
      <div className='flex-1'>
       <div className='md:text-left text-center'>
       <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
          <span className='text-cyan-600 md:text-6xl text-5xl'>
            Hello ! 
            <br/>
          </span>
          My Name is <span>Rateb Alnaal</span>
        </h1>
        <h4 className='md:text-2xl text-lg  md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Frontend Developer </h4>
        <a href='#contact'><button className='btn-primary mt-8 '>Contact Me </button></a>
        <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
        {social_media?.map((icons ,i)=>(
          <div key={i} className='text-gray-600 hover:text-white'>
           <a href={icons?.link} target='blank'><ion-icon name={icons?.logo}></ion-icon></a>
          </div>
        ))}
       </div>
      </div>
      </div>
    </section>
  )
}
export default Hero