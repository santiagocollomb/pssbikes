import React, { useState, useEffect } from "react"
import SectionHero from "../components/SectionHero/index"
import SectionBikeDescription from "../components/SectionBikeDescription/index"
import SectionBikeInfo from "../components/SectionBikeInfo/index"
import SectionBikeGallery from "../components/SectionBikeGallery/index"
import SectionContact from "../components/SectionContact/index"
import data from "../content/data.json"

export default function Street() {
  const bike = data.bikes[1]
  const [isPro, setIsPro] = useState("yes")
  const [bikeType, setBikeType] = useState(bike.basic)

  useEffect(() => {
    isPro === "yes" ? setBikeType(bike.pro) : setBikeType(bike.basic)
  }, isPro)

  return (
    <>
      <SectionHero
        isPro={isPro}
        title={bike.name}
        titleStyle={bikeType.nameStyle}
        background={bikeType.background}
        blendMode={bikeType.blendMode}
        decoration={bikeType.decoration}
      >
        <img src={bikeType.imageHero} alt="Logo" className="hero-bike" />
      </SectionHero>

      <SectionBikeDescription bike={bike} />

      <SectionBikeInfo
        hasPro={true}
        isPro={isPro}
        setIsPro={setIsPro}
        bike={bikeType}
        showPrice={true}
      />

      <SectionBikeGallery gallery={bike.gallery} />

      <SectionContact bikeName={bikeType.name} color={bikeType.color} />
    </>
  )
}
