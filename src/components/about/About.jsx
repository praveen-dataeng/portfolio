import React from 'react'
import '../about/about.css'
import ME from '../../assets/phot_upload.jpg'
import {GiWantedReward} from 'react-icons/gi'
import {VscNewFolder} from 'react-icons/vsc'
import {BsPeople} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiWantedReward className='about__icon'/>
              <h5>Experience</h5>
              <small>
                5+ years of Working experience
              </small>
            </article>

            <article className='about__card'>
              <VscNewFolder  className='about__icon'/>
              <h5>Projects</h5>
              <small>
                Completed 10+ projects
              </small>
            </article>

            <article className='about__card'>
              <BsPeople className='about__icon'/>
              <h5>Clients</h5>
              <small>
                Worked with 10 Clients
              </small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quam minus eligendi non? Deserunt minima delectus debitis 
            provident ipsa ipsam corrupti dicta voluptatibus, 
            placeat numquam vitae quas et aperiam a sapiente.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About