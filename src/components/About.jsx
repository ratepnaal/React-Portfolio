import React from 'react'

const About = () => {
  const info = [
    {text:'Years Experience' , count:'01'},
    {text:'Completed Projects ' , count:'10'},
    {text:'Months Internship ' , count:'02'}
  ]
  return (
    <section id='about' className='py-10 text-white'>
      <div className='mt-8 text-center'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg '>My Introduction</p>
        <div className='flex md:text-lg text-sm items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto '>
          <div className='text-gray-400 my-3'>
            <p>
            Third-year Information Technology student at the Syrian Virtual University,
             specializing in front-end development with hands-on experience across multiple projects. After an intensive two-month 
             remote internship in front-end development,
              I gained practical knowledge in modern technologies,
              enhancing my ability to build responsive, high-quality web applications. I am eager to bring my
             technical skills and creativity to professional environments to deliver exceptional user experiences.
            </p>
          <div className='flex mt-10 items-center gap-10 justify-around'>
          {
              info.map(content=>(
                <div key={content.text}>
                  <h3 className='md:text-4xl text-2xl font-semibold text-white mt-3'>{content.count}
                    <span className='text-cyan-600'>+</span>{" "}
                    </h3>
                  <span>{content.text}</span>
                </div>
              ))}
          </div>
          <br/>
          <br/>
          <a href="Rateb_Alnaal_CV.pdf" download="Rateb Alnaal CV" className='flex justify-center mt-5'>
          <button className='btn-primary'>Dawnload CV</button>
          </a>
          </div>
       </div>
      </div>
    </section>
  )
}

export default About