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
          "url(https://www.pssbikes.com/images/reweb/bg-home.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="home-content">
              <div className="home-title">
                <h1 className="shadow-title">
                  HACEMOS BICIS <br /> ELÉCTRICAS Y URBANAS
                </h1>
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
    </section>
  )
}
