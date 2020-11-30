import React from "react"
import BikeInfo from "../BikeInfo/index"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import "./style.styl"

export default function SectionBikeInfo({
  id,
  bike,
  page,
  showPrice,
  setIsPro,
  isPro,
  hasPro,
  invert,
  sectionKey,
}) {
  const info = invert ? (
    <section
      className="section-half bg-primary section-bikeinfo"
      key={sectionKey}
    >
      <div className="container">
        <div className="row flex-column">
          <div className="col-6 info-img-container flex">
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={0}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translate3d(0px,0,0) scale(1)"
                      : "translate3d(0,100px,0) scale(0.8)",
                  }}
                >
                  {props => <img style={props} src={bike.bikeInfoImg} alt="" />}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <div
            className="col-6 h-100 flex m-0"
            style={{
              justifyContent: "center",
              display: "flex",
              height: "100vh",
              marginBottom: "0px",
            }}
          >
            <BikeInfo
              bike={bike}
              showPrice={showPrice}
              hasPro={hasPro}
              page={page}
              align="info-left"
            />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section id={id} className="section-half bg-primary section-bikeinfo pb-0">
      <div className="container">
        <div className="row">
          <div
            className="col-6 h-100 flex"
            style={{
              justifyContent: "center",
              display: "flex",
              height: "100vh",
              marginBottom: "0px",
            }}
          >
            <BikeInfo
              bike={bike}
              showPrice={showPrice}
              hasPro={hasPro}
              isPro={isPro}
              setIsPro={setIsPro}
              page={page}
              align="info-left"
            />
          </div>
          <div className="col-6 info-img-container flex">
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={0}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translate3d(0px,0,0) scale(1)"
                      : "translate3d(0,100px,0) scale(0.8)",
                  }}
                >
                  {props => <img style={props} src={bike.bikeInfoImg} alt="" />}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </section>
  )

  return <>{info}</>
}
