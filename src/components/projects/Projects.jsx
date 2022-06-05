import React from 'react'
import '../projects/projects.css'
import IMG1 from '../../assets/tools-1.png'
import IMG2 from '../../assets/tools-2.png'
import IMG3 from '../../assets/tools-3.png'
import IMG4 from '../../assets/tools-4.png'
import IMG5 from '../../assets/tools-5.png'
import IMG6 from '../../assets/tools-6.png'
// Dynamically calling projects by using Array-Map function
const data = [
  {
      id: 1,
      image: IMG1,
      title: 'Potato Disease Identification',
      github: 'www.github.com',
      demo: 'www.google.com',
  },
  {
      id: 2,
      image: IMG2,
      title: 'Loan Approval Prediction',
      github: 'www.github.com',
      demo: 'www.google.com',
  },
  {
      id: 3,
      image: IMG3,
      title: 'Bangalore Real-Estate Price Prediction',
      github: 'www.github.com',
      demo: 'www.google.com',
  },
  {
      id: 4,
      image: IMG4,
      title: 'Celebrity Image Classification',
      github: 'www.github.com',
      demo: 'www.google.com',
  },
  {
      id: 5,
      image: IMG5,
      title: 'PowerBI sales insight',
      github: 'www.github.com',
      demo: 'www.google.com',
  },
  {
      id: 6,
      image: IMG6,
      title: 'Amazon Churn Model',
      github: 'www.github.com',
      demo: 'www.google.com',
  },
]
// ENDS ARRAY map data

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Projects</h5>
      <h2>Data Science Projects</h2>

      <div className="container projects__container">
        <div className="projects__datascience">
          {/* <h2>Data Science Projects</h2> */}

          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='prjects__items'>
                  <div className="project__item-images">
                    <img src={image} alt={title} />              
                  </div>
                  <h3>{title}</h3>
                  <div className="project__items-cta">
                      <a href={github} className="btn" target='_blank'>GitHub</a>
                      <a href={demo} className="btn btn-primary" target='_blank'>Demo</a>
                  </div>            
                </article>
              )
            })
          }

                    
        </div>
      </div>
    </section>
  )
}

export default Projects