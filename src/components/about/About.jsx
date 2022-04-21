import React from 'react'
import './about.css'
import ME from '../../assets/square_me.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />

          </div>
        </div>
        <div className="about__content">
          
          <p>Passionate Software Developer always seeking to improve and learn. My background comes from an education in Physics and Mathematics. With professional experience in the fields of Oil/Gas, Hospitality, and Electrical. While not coding you can find me surfing, working out at a local gym, or traveling. My favorite destinations currently are Greece and Brazil. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About