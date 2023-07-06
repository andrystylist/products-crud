import React from 'react'
import './Header.scss'
import logo from '../../assets/logo1.png'
import { HiMenu } from 'react-icons/hi'

function Header () {
  return (
    <header className='header'>
      <section className='header__container'>
        <section className='header__left'>
          <img className="header__logo"
          src={logo}
          alt="logo"
          aria-label='Logo'
          />
          <h1 className='header__title'>My Site</h1>
        </section>
        <section className='header__right'>
          <nav className='header__nav'>
            <ul className='header__menu'>
              <li className='header__menu--item'>
                <a href='#'>Products</a>
              </li>
              <li className='header__menu--item'>
                <a href='#'>Contacts</a>
              </li>
              <li className='header__menu--item'>
                Get started
              </li>
            </ul>
            <button type='button'>
              <HiMenu className='header__menu--icon' />
            </button>
          </nav>
        </section>
      </section>
    </header>
  )
}

export default Header
