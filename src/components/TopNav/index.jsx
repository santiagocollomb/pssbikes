import React from 'react'
import { Link } from "gatsby"
import LogoFull from '../../assets/logo-full.svg'
import SocialIcons from '../SocialIcons/index'
import './style.styl'

export default function Sidebar() {

  return (
    <nav className="top-nav">
      <Link to="/" className="link">NOSOTROS</Link>
      <img src={LogoFull} alt=""/>
      <Link to="/" className="link">CONTACTOS</Link>

      <div className="top-nav-social">
        <SocialIcons />
      </div>
    </nav>
  )
}