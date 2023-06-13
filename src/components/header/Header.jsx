import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='mainHeader'>
        <div className='leftSection'>
          <p>Hugo Quintal</p>
        </div>
        <div className='rightSection'>
          <a className='menuItem' href="#">About Me</a>
          <a className='menuItem' href="#">Skills</a>
          <a className='menuItem' href="#">Contact</a>
        </div>
    </div>
  )
}

export default Header