import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import ImagesContainer from "../ImagesContainer/index"
import ProSwitch from "../ProSwitch"
import ColorList from "./ColorList"

import "./style.styl"

function BikeInfo({ bike, page, hasPro, isPro, setIsPro, showPrice, align }) {
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
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
            <div className={`bike-info ${align}`} style={props}>
              <h1 className="uppercase mb-0">{bike.name}</h1>

              <div className="bike-info-container">
                {hasPro && (
                  <ProSwitch isPro={isPro} setIsPro={setIsPro && setIsPro} />
                )}

                <ColorList
                  colors={["#ed1c24", "#e4dc9e", "#546468", "#000000"]}
                />

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
                      <span>${bike.price}</span>
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
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default BikeInfo
