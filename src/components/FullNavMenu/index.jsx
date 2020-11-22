import React, { useState } from 'react'
import { Link } from "gatsby"
import Media from "react-media"
import Facebook from "../SocialIcons/facebook.svg"
import Instagram from "../SocialIcons/instagram.svg"
import Youtube from "../SocialIcons/youtube.svg"
import Moon from "./moon.svg"
import LogoFull from "../../assets/logo-full.svg"

import './style.styl'

export default function FullNavMenu({ toggleTheme, isOpen, openMenu }) {

  const [activePreview, setActivePreview] = useState()
  
  const links = [
    {
      text: "STREET",
      url: "/street",
      preview: "https://pssbikes.com/images/street/street-pro-hero.png",
    },
    {
      text: "SINGLE SPEED",
      url: "/single-speed",
      preview: "https://pssbikes.com/images/single/single-speed-pro-hero.png",
    },
    {
      text: "CONTACTO",
      url: "/contacto",
      preview:
        "",
    },
    {
      text: "NOSOTROS",
      url: "/nosotros",
      preview:
        "",
    },
  ]

  return (
    <>
      <header id="header">
        <nav className="nav">
          <div className="nav-left">
            <img src={LogoFull} alt="" />
          </div>

          <div className="nav-right">
            <div className="theme-icon hoverable" onClick={() => toggleTheme()}>
              <div className="theme-link">
                <img src={Moon} alt="" />
              </div>
            </div>
            <button
              className={
                isOpen
                  ? `toggle-menu active hoverable`
                  : "toggle-menu hoverable"
              }
              onClick={() => openMenu()}
            >
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <div id="menu" className={isOpen ? `open` : ""}>
        <div className="row menu-row">
          <Media
            query="(min-width: 599px)"
            render={() => (
              <>
                <div className="col-3 flex">
                  <div className="socials">
                    <div className="social-link">
                      <a
                        href="https://www.facebook.com/pssbikes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hoverable"
                      >
                        <img src={Facebook} alt="" />
                        <span>/pssbikes</span>
                      </a>
                    </div>
                    <div className="social-link">
                      <a
                        href="https://www.instagram.com/pssbikes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hoverable"
                      >
                        <img src={Instagram} alt="" />
                        <span>@pssbikes</span>
                      </a>
                    </div>
                    <div className="social-link">
                      <a
                        href="https://www.youtube.com/channel/UCfOyKf7E-4CT4x1IdioKGBw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hoverable"
                      >
                        <img src={Youtube} alt="" />
                        <span> /pssbikes</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="menu-preview">
                    <img
                      src={activePreview}
                      alt=""
                      className={activePreview ? "visible" : ""}
                    />
                  </div>
                </div>
                <div className="col-3 flex">
                  <nav className="main-nav">
                    <ul>
                      {links.map(link => (
                        <li key={link.url}>
                          <Link
                            to={link.url}
                            className="hoverable"
                            onClick={() => openMenu()}
                            onMouseEnter={() => setActivePreview(link.preview)}
                            onMouseLeave={() => setActivePreview("")}
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </>
            )}
          />

          <Media
            query="(max-width: 599px)"
            render={() => (
              <div className="col-12">
                <nav className="main-nav">
                  <ul>
                    {links.map(link => (
                      <li key={link.url}>
                        <Link
                          to={link.url}
                          className="hoverable"
                          onClick={() => openMenu()}
                          onMouseEnter={() => setActivePreview(link.preview)}
                          onMouseLeave={() => setActivePreview("")}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="socials">
                  <div className="social-link">
                    <a
                      href="https://www.facebook.com/pssbikes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hoverable"
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </div>
                  <div className="social-link">
                    <a
                      href="https://www.instagram.com/pssbikes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hoverable"
                    >
                      <img src={Instagram} alt="" />
                    </a>
                  </div>
                  <div className="social-link">
                    <a
                      href="https://www.youtube.com/channel/UCfOyKf7E-4CT4x1IdioKGBw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hoverable"
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </>
  )
}