import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import ImagesContainer from "../ImagesContainer/index"
import ProSwitch from "../ProSwitch"
import ColorList from "./ColorList"

import "./style.styl"

function BikeInfo({ bike, page, hasPro, isPro, setIsPro, showPrice, align }) {

  const springProps = useSpring({
    to: [
      { opacity: 0, color: "#ffaaee" },
      { opacity: 1, color: "#000" },
    ],
  })

  return (
    <div className={`bike-info ${align}`}>
      <animated.div style={springProps}>
        <h1 className="uppercase mb-0">
          {bike.name}
        </h1>
      </animated.div>

      <div className="bike-info-container">
        {hasPro && <ProSwitch isPro={isPro} setIsPro={setIsPro && setIsPro} />}

        <ColorList colors={["#ed1c24", "#e4dc9e", "#546468", "#000000"]} />

        {showPrice ? (
          <>
            <div className="bike-info-list">
              <ul>
                {bike.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <p className="bike-info-price mb-5">
              <animated.span style={springProps}>${bike.price}</animated.span>
            </p>
            <ImagesContainer images={bike.images}></ImagesContainer>
          </>
        ) : (
          <>
            <p className="bike-info-text">{bike.description}</p>
            <ImagesContainer images={bike.images}></ImagesContainer>
            <Link to={`/${page}`} className="hoverable">
              
              <button className="btn btn-black hoverable mt-6">
                VER MÁS
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default BikeInfo