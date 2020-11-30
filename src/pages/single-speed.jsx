import React, { useState, useEffect } from "react"
import SectionHero from "../components/SectionHero/index"
import SectionBikeDescription from "../components/SectionBikeDescription/index"
import SectionBikeInfo from "../components/SectionBikeInfo/index"
import SectionBikeGallery from "../components/SectionBikeGallery/index"
import SectionContact from "../components/SectionContact/index"
import Helmet from "react-helmet"
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>PSS bikes | Single Speed</title>
        <meta
          name="description"
          content="Nuestra Single Speed es la clásica bicicleta de ciudad: ligera, sencilla de manejar y requiere muy poco mantenimiento. Consulta en ambos casos por modificación de cubiertas y otros accesorios."
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="PSS bikes | Single Speed" />

        <meta
          property="og:description"
          content="Nuestra Single Speed es la clásica bicicleta de ciudad: ligera, sencilla de manejar y requiere muy poco mantenimiento. Consulta en ambos casos por modificación de cubiertas y otros accesorios."
        />

        <meta
          property="og:image"
          content="https://pssbikes.com/images/og/og-single-speed.jpg"
        />

        <meta property="og:url" content="https://pssbikes.com/single-speed" />

        <meta property="og:site_name" content="PSS BIKES" />
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
