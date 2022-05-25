import React from 'react'
import './colorbar.css'
import { BsCircleFill } from 'react-icons/bs'


const ColorBar = ({switchTheme}) => {


  return (
      
    <div className='colorbar'>
      <i onClick={() => switchTheme('dark')}><BsCircleFill/></i>
      <i id="red" onClick={() => switchTheme('red')}><BsCircleFill/></i>
      <i id="blue" onClick={() => switchTheme('blue')}><BsCircleFill/></i>
      <i id="green" onClick={() => switchTheme('green')}><BsCircleFill/></i>
      
    </div>
    
  )
}

export default ColorBar