import React, { useState, useEffect } from "react"
import SectionHero from "../components/SectionHero/index"
import SectionBikeDescription from "../components/SectionBikeDescription/index"
import SectionBikeInfo from "../components/SectionBikeInfo/index"
import SectionBikeGallery from "../components/SectionBikeGallery/index"
import SectionContact from "../components/SectionContact/index"
import Helmet from "react-helmet"
import data from "../content/data.json"

export default function Street() {
  const bike = data.bikes[0]
  const [isPro, setIsPro] = useState("yes")
  const [bikeType, setBikeType] = useState(bike.basic)

  useEffect(() => {
    isPro === "yes" ? setBikeType(bike.pro) : setBikeType(bike.basic)
  }, isPro)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PSS bikes | Street</title>
        <meta
          name="description"
          content="Este modelo es ideal para el uso diario o de paseo en la ciudad. Sus ruedas finas y la liviandad del cuadro, hacen que sea un bicicleta liviana y rapidísima."
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="PSS bikes | Street" />

        <meta
          property="og:description"
          content="Este modelo es ideal para el uso diario o de paseo en la ciudad. Sus ruedas finas y la liviandad del cuadro, hacen que sea un bicicleta liviana y rapidísima."
        />

        <meta
          property="og:image"
          content="https://pssbikes.com/images/og/og-street.jpg"
        />

        <meta property="og:url" content="https://pssbikes.com/street" />

        <meta property="og:site_name" content="PSS bikes" />
      </Helmet>

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
