import React, { useEffect, useState } from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import "./style.styl"

export default function SectionBikeDescription({ bike }) {
  const [xy, setXy] = useState(10)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    setXy(-window.scrollY / 5 + 200)
  }

  return (
    <section id="bike-description" className="section-half pb-0 bg-primary">
      <h2 className="bg-text" style={{ transform: `translate(${xy}px, 0px)` }}>
        {bike.name}
      </h2>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <>
            <Spring
              delay={0}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translate3d(0px,0,0) scale(1)"
                  : "translate3d(0,100px,0) scale(0.8)",
              }}
            >
              {props => (
                <img
                  src={bike.descriptionImg}
                  alt=""
                  className="description-img"
                  style={props}
                />
              )}
            </Spring>

            <Spring
              delay={200}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translate3d(0px,0,0) scale(1)"
                  : "translate3d(0,100px,0) scale(0.8)",
              }}
            >
              {props => (
                <div className="description-content">
                  <h2 className="description-title" style={props}>
                    {bike.title}
                  </h2>
                  <p className="description-text" style={props}>
                    {bike.description}
                  </p>
                </div>
              )}
            </Spring>
          </>
        )}
      </VisibilitySensor>
    </section>
  )
}
