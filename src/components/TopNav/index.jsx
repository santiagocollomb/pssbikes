import React from 'react'
import { Link } from "gatsby"
import LogoFull from '../../assets/logo-full.svg'
import SocialIcons from '../SocialIcons/index'


import './style.styl'

export default function Sidebar({toggleTheme}) {

  return (
    <nav className="top-nav">
      <Link to="/nosotros" className="link hoverable">
        NOSOTROS
      </Link>
      <Link to="/" className="link hoverable">
        <img src={LogoFull} alt="" />
      </Link>
      <Link to="/contacto" className="link hoverable">
        CONTACTOS
      </Link>

      <div className="top-nav-right">
        <SocialIcons />
        <div className="line"></div>
        <div className="theme-icon" onClick={() => toggleTheme()}>
          <div className="theme-link">
            <img src={Moon} alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}