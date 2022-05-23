import React from 'react'
import './colorbar.css'
import useLocalStorage from 'use-local-storage'
import { BsCircleFill } from 'react-icons/bs'


const ColorBar = () => {

  const [theme, setTheme ] = useLocalStorage('dark')
  
  const switchTheme = (color) => {
    const newTheme = color
    setTheme(newTheme)
  }

  return (
      
    <div className='colorbar'>
      <i><BsCircleFill/></i>
      <i><BsCircleFill/></i>
      <i><BsCircleFill/></i>
      <i><BsCircleFill/></i>
      
    </div>
    
  )
}

export default ColorBar