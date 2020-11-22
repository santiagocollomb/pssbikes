import React from 'react'
import BikeInfo from '../BikeInfo/index'

import './style.styl'

export default function SectionBikeInfo({id, bike, page, showPrice, setIsPro, isPro, hasPro, invert, sectionKey}) {

  console.log(id)
  const info = invert ? (
    <section
      className="section-half pt-0 bg-primary section-bikeinfo"
      key={sectionKey}
    >
      <div className="container">
        <div className="row">
          <div className="col-6 info-img-container flex">
            <img src={bike.bikeInfoImg} alt="" />
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
    <section id={id} className="section-half bg-primary section-bikeinfo">
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
            <img src={bike.bikeInfoImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )

  return <>{info}</>
}