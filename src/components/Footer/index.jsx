import { Link } from 'gatsby'
import React from 'react' 
import ByDigit from '../ByDigit/index'
import Facebook from '../SocialIcons/facebook.svg'
import Instagram from "../SocialIcons/instagram.svg"
import Youtube from "../SocialIcons/youtube.svg"

import "./style.styl"

export default function Footer({menuIsOpen}) {

  return (
    <footer
      className="bg-primary"
      style={menuIsOpen ? { position: "absolute" } : {}}
    >
      <div className="container">
        <a
          href="mailto:info@pssbikes.com"
          className="email hoverable hover-text"
        >
          info@pssbikes.com
        </a>

        <div className="socials">
          <div className="social-link hoverable">
            <a
              href="https://www.facebook.com/pssbikes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="" />
              <span>Facebook</span>
            </a>
          </div>
          <div className="social-link hoverable">
            <a
              href="https://www.instagram.com/pssbikes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="" />
              <span>Instagram</span>
            </a>
          </div>
          <div className="social-link hoverable">
            <a
              href="https://www.youtube.com/channel/UCfOyKf7E-4CT4x1IdioKGBw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-6 down">
            <h2>
              <strong className="c-grey">
                ® 2020 <div className="line"></div>
              </strong>
              <span className="mobile-f">Todos los derechos reservados. </span>
              <Link to="/" className="hoverable">
                - Politicas de privacidad
              </Link>
            </h2>
          </div>
          <div className="col-6 down">
            <ByDigit />
          </div>
        </div>
      </div>
    </footer>
  )

}