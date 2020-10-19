import React from "react"
import ImagesContainer from "../ImagesContainer/index"
import ProSwitch from "../ProSwitch"
import ColorList from "./ColorList"

import "./style.styl"

function BikeInfo({bike, hasPro, isPro, setIsPro}) {
  
  return (
    <div className="bike-info">
      <h1 className="uppercase mb-0">{bike.name}</h1>
      <div className="bike-info-container">
        {hasPro && <ProSwitch isPro={isPro} setIsPro={setIsPro} />}

        <p className="bike-info-text">{bike.description}</p>
        <ColorList colors={["#ed1c24", "#e4dc9e", "#546468", "#000000"]} />
        <div className="bike-info-list">
          <ul>
            {bike.features.map(feature => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
        <p className="bike-info-price mb-5">${bike.price}</p>
        <ImagesContainer images={bike.images}></ImagesContainer>
      </div>
    </div>
  )
}

export default BikeInfo