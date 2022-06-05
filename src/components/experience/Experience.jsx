import React from 'react'
import '../experience/experience.css'
import {IoMdCheckboxOutline} from 'react-icons/io'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Expertise</h2>

      <div className="container experience__container">
        {/* DataScience Experience Starts*/}
        <div className="experience__datascience">
          <h3>Data Science</h3>
          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Machine Learning</h4>
            <small className='text-light'>Experienced</small>           
            </div>
            
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Deep Learning</h4>
            <small className='text-light'>Experienced</small>  
            </div>
            
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Artificial Intelligence</h4>
            <small className='text-light'>Experienced</small> 
            </div>
            
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>OpenCV</h4>
            <small className='text-light'>Experienced</small> 
            </div>
            
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Keras</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
        </div>
        {/* END of Data Science Experince */}
        
        {/* Web Development Experince Starts*/}
        <div className="experience__webdevelopment">
          <h3>Web Development</h3>
          <small>Full Stack Web Development</small>
          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Reactjs</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
          </article>

          <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>Django web FrameWork</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
          </article>
        </div>
        {/* Web Development Experience Ends  */}

        {/* Database Starts */}
      <div className="experience__databases">
        <h3>DataBase</h3>
        <small>Backend Server DB</small>

        <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
        </article>

        <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>SQLlite3</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
        </article>

        <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>MangoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
        </article>

        <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>PostgreSql</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
        </article>

        <article className='experience__details'>
            <IoMdCheckboxOutline className='experience__details-icon'/>
            <div>
              <h4>MS-SQLserver</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
        </article>
      </div>
      {/* Database Ends */}
      </div>
      
    </section>
  )
}

export default Experience