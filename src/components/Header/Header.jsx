import React from 'react'
import './Header.scss'
import logo from '/logo.svg';

function Header () {
  return (
    <>
      <header className='header'>

        <div className='header-container'>
          <div className='logo-container'>
            <div>
              <img src={logo} alt="Logo image" />
            </div>
            <h2>Company Name</h2>
          </div>

          <div className="nav-menu">
            <a href="#">Getting started</a>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header
