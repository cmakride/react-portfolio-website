import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUserAstronaut } from 'react-icons/fa'
import { RiBookLine,RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><FaUserAstronaut/></a>
      <a href="#experience"><RiBookLine/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav