import React, { useContext } from 'react';
import { MenuContext } from '../MenuContext'

const Bot = () => {
  const { isOpen } = useContext(MenuContext);
  return (
  <a href="#contact">
      <div className={`fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer 
    text-4xl w-16 h-16 flex items-center justify-center rounded-full animate-bounce
    ${isOpen?`text-cyan-600 bg-white`:`text-white bg-cyan-600`}`}>
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
  </a>
  )
}

export default Bot