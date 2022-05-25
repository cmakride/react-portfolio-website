import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ColorBar from './components/colorbar/ColorBar'



const App = () => {
  const [theme,setTheme] = useState('dark')
  
  
  function switchTheme(color) {
    setTheme(color)
  }


  return (
    <div data-theme={theme}>
    <ColorBar switchTheme={switchTheme}/>
    <Header/>
    <Nav/>
    <Portfolio/>
    <Experience/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App