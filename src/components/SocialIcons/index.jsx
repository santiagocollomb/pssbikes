import React from 'react'
import './style.styl'
import Facebook from './facebook.svg'
import Instagram from "./instagram.svg"

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="social-icon">
        <a
          href="https://www.facebook.com/pssbikes/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons-link hoverable"
        >
          <img src={Facebook} alt="" />
        </a>
      </div>
      <div className="social-icon">
        <a
          href="https://www.instagram.com/pssbikes/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons-link hoverable"
        >
          <img src={Instagram} alt="" />
        </a>
      </div>
    </div>
  )
}