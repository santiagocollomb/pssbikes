import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "./style.styl"

export default function SectionHome() {
  return (
    <section
      id="home"
      className="section-full"
      style={{
        backgroundImage:
          "url(https://www.pssbikes.com/images/reweb/pss-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="home-content">
              <div className="home-title">
                <h1 className="shadow-title ">
                  <span className="text-white title-medium">BICICLETAS</span>
                  <span className="text-white title-regular">PATAGÓNICAS</span>
                  <span className="text-red title-bold"> Y URBANAS</span>
                </h1>
                <div className="btn-container">
                  <AnchorLink to="/#street">
                    <button className="btn btn-black btn-rounded hoverable mt-4">
                      Ver más
                    </button>
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://www.pssbikes.com/images/reweb/pss-bg-bike.png"
        alt=""
        className="home-bike"
      />
      <img
        src="https://www.pssbikes.com/images/reweb/pss-bg-deco.png"
        alt="Logo"
        className="decoration"
      />
    </section>
  )
}
