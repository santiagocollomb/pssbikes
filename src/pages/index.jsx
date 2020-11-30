import React from "react"
import SectionHome from "../components/SectionHome/index"
import SectionBikeInfo from "../components/SectionBikeInfo/index"
import SectionContact from "../components/SectionContact/index"
import Helmet from "react-helmet"

import data from "../content/data"

export default function Home() {
  const bikesMap = data.bikes.map((bike, key) =>
    key % 2 === 0 ? (
      <SectionBikeInfo
        id={bike.name}
        bike={bike.basic}
        page={bike.page}
        showPrice={false}
        invert={false}
        key={bike.page}
      />
    ) : (
      <SectionBikeInfo
        bike={bike.basic}
        page={bike.page}
        showPrice={false}
        invert={true}
        key={bike.page}
      />
    )
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PSS BIKES | </title>
        <meta
          name="description"
          content="Bicicletas patagónicas y urbanas. Fabricamos los productos a medida, garantizando calidad y alto rendimiento, con componentes de primera línea."
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="PSS BIKES" />

        <meta
          property="og:description"
          content="Bicicletas patagónicas y urbanas. Fabricamos los productos a medida, garantizando calidad y alto rendimiento, con componentes de primera línea."
        />

        <meta property="og:image" content="LINK A LA IMAGEN DESTACADA" />

        <meta property="og:url" content="https://pssbikes.com" />

        <meta property="og:site_name" content="PSS BIKES" />
      </Helmet>

      <SectionHome />

      {bikesMap}

      <SectionContact />
    </>
  )
}
