import React from "react"
import SectionAboutUs from "../components/SectionAboutUs/index"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PSS bikes | nosotros</title>
        <meta
          name="description"
          content="Fabricamos los productos a medida, garantizando calidad y alto rendimiento, con componentes de primera línea."
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="PSS bikes | nosotros" />

        <meta
          property="og:description"
          content="Fabricamos los productos a medida, garantizando calidad y alto rendimiento, con componentes de primera línea."
        />

        <meta
          property="og:image"
          content="https://pssbikes.com/images/og/og-nosotros.jpg"
        />

        <meta property="og:url" content="https://pssbikes.com/nosotros" />

        <meta property="og:site_name" content="PSS BIKES" />
      </Helmet>
      <SectionAboutUs />
    </>
  )
}
