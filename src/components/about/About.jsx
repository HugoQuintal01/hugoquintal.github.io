import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='mainAbout'>
      <section className='sectionTitle'>
        <h2 className='mainSkillsAbout'>Main <span className='yellowColor'>Skills</span></h2>
      </section>
      
      <section className='skillSection'>
        <div className='skill'>
          <div className='border'>
            <div className='mainSkill'>
              <h3 className='skillName'>JavaScript</h3>
            </div>
            <div className='skillsExtra'>
              <h4>- REACT</h4>
              <h4>- JQuery</h4>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='border'>
            <div className='mainSkill'>
              <h3 className='skillName'>HTML</h3>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='border'>
            <div className='mainSkill'>
              <h3 className='skillName'>CSS</h3>
            </div>
            <div className='skillsExtra'>
              <h4>- SCSS</h4>
              <h4>- Bootstrap</h4>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='border'>
            <div className='mainSkill'>
              <h3 className='skillName'>Wordpress</h3>
            </div>
            <div className='skillsExtra'>
              <h4>- Elementor</h4>
              <h4>- Woocommerce</h4>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='border'>
            <div className='mainSkill'>
              <h3 className='skillName'>Design Tools</h3>
            </div>
            <div className='skillsExtra'>
              <h4>- Figma</h4>
              <h4>- Adobe XD</h4>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  )
}

export default About