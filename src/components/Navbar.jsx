import React, { useEffect, useState , useContext } from 'react'
import { MenuContext } from '../MenuContext';
const Navbar = () => {
  //state for make cyan color all the navbar  
  const [stiky , setStiky] = useState(false);
  // for pass state isopen for all components
  const { isOpen, setIsOpen } = useContext(MenuContext);
  // Array have all the links in Navbar 
  const minuLinks= [
    {name:"HOME" , link:"#home"},
    {name:"ABOUT" , link:"#about"},
    {name:"SKILLS" , link:"#skills"},
    {name:"PROJECTS" , link:"#projects"},
    {name:"CONTACT" , link:"#contact"}
  ];
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      const nav = document.querySelector('nav')
      window.scrollY>0?setStiky(true):setStiky(false)
    })
  } , [])

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${stiky?`md:bg-cyan-600 md:text-gray-900`:`text-white`}`}>
      <div className='flex items-center justify-between'>
        <div className='mx-7'>
          <h4 className='text-4xl uppercase font-bold'>
            R<span className={` ${stiky?`text-cyan-600 md:text-white`:`text-cyan-600`}`}>AT</span>EB
          </h4>
        </div>
        <div className='text-gray-900 md:block hidden px-7 py-2 font-medium bg-cyan-600 
        rounded-bl-full'>
          <ul className='flex items-center gap-1 py-2 text-lg'>
 {/**in first map for all variable in minulinks name and link and return list */}
            {minuLinks?.map((menu , i)=>(
              <li key={i} className='px-6 hover:text-white'>
{/**Secondly Set link in a href and name like a text  */}
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)}
        className={`z-[999] ${isOpen?`text-gray-900 hover:text-white`:`text-cyan-600 hover:text-white`} text-3xl md:hidden m-5 `}>
          <ion-icon name="menu"></ion-icon>
        </div>  
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium
         bg-cyan-600 top-0 right-0 ${isOpen?`right-0`:`right-[-100%]`} duration-300`}  >
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'onClick={()=>setIsOpen(!isOpen)}>
            {minuLinks?.map((menu , i)=>(
              <li key={i} className='px-6 hover:text-white' >
                <a href={menu?.link} >{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar