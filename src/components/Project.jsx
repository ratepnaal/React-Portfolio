import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import project_person from '../assets/images/project_person.png'

const Project = () => {
  const projects = [
    {
        img:project1 ,
       github_link:'https://github.com/ratepnaal/E-Commerce-Company.git' ,
        live_link:'https://e-commerce-company.vercel.app/',
        name:'E Commerce Full Website'
      },
    {
      img:project2 
      , github_link:'https://github.com/ratepnaal/Awards-Waining-' ,
       live_link:'https://awards-waining.vercel.app/',
       name:'Gaming Website'
      },
    {
      img:project3
      , github_link:'https://github.com/ratepnaal/Portofolio.git' ,
       live_link:'https://ratepnaal.github.io/Portofolio/',
       name:' Old Portfolio '
      },
    {
      img:project4 ,
       github_link:'https://github.com/ratepnaal/React-Portfolio.git' ,
        live_link:'https://react-portfolio-rosy-eta.vercel.app/',
        name:' My Portfolio '
      },
      {
        img:project5 ,
         github_link:'https://github.com/ratepnaal/MovieLand-Website-.git' ,
          live_link:'https://movie-land-baim5gqyl-ratepnaals-projects.vercel.app/',
          name:'Movie Land Website  '
        },
  ]
  return (
    <section id='projects' className='py-10 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-5 text-lg'>My Awesome Works  </p>
      </div>
      <br/>
      <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
        <div className='lg:w-2/3 w-full'>
        <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{768:{slidesPerView:2,}}} loop={true}
         autoplay={{delay:3000,}}  pagination={{clickable:true,}} modules={[Pagination , Autoplay]} >
         {
          projects.map((project_info , i)=>(
            <SwiperSlide key={i}>
            <div className='h-fit w-full p-4 bg-slate-700 rounded-xl '>
              <img src={project_info.img} alt='project1' className='rounded-lg'></img>
              <h3 className='text-xl my-4'>{project_info.name}</h3>
              <div className='flex gap-3'>
                <a href={project_info.github_link} target='blank'
                 className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>GitHub</a>
                <a href={project_info.live_link} target='blank' 
                className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'> Live Demo </a>
              </div>
            </div>
          </SwiperSlide>
          ) )
         }
        </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src={project_person} alt='project-person '></img>
        </div>
      </div>
    </section>
  )
}

export default Project
