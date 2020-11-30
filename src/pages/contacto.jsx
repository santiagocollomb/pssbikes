import React from "react"
import SectionContact from "../components/SectionContact/index"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PSS bikes | contacto</title>
        <meta
          name="description"
          content="Solicitanos un presupuesto o un test drive.
Te responderemos lo antes posible."
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="PSS bikes | contacto" />

        <meta
          property="og:description"
          content="Solicitanos un presupuesto o un test drive.
Te responderemos lo antes posible."
        />

        <meta
          property="og:image"
          content="https://pssbikes.com/images/og/og-contacto.jpg"
        />

        <meta property="og:url" content="https://pssbikes.com/contacto" />

        <meta property="og:site_name" content="PSS bikes" />
      </Helmet>
      <SectionContact />
    </>
  )
}
