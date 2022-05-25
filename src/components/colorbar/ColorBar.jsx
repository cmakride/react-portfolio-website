import React from 'react'
import './colorbar.css'
import { BsCircleFill } from 'react-icons/bs'


const ColorBar = ({switchTheme}) => {


  return (
      
    <div className='colorbar'>
      <i onClick={() => switchTheme('dark')}><BsCircleFill/></i>
      <i onClick={() => switchTheme('red')}><BsCircleFill/></i>
      <i onClick={() => switchTheme('blue')}><BsCircleFill/></i>
      <i onClick={() => switchTheme('green')}><BsCircleFill/></i>
      
    </div>
    
  )
}

export default ColorBar