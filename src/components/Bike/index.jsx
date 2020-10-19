import React, { useState, useEffect } from "react"

import SideBar from "../SideBar/index"
import HeroSection from '../HeroSection/index'
//import IconsContainer from "../IconsContainer/index"
import BikeInfo from '../BikeInfo/index'
import ContactForm from "../ContactForm/index"

export default function Bike({ pageContext }) {
  const { bike } = pageContext
  const [isPro, setIsPro] = useState("no")
  const [bikeType, setBikeType] = useState(bike.basic)
  
  useEffect(() => {
    isPro === "yes" ? setBikeType(bike.pro) : setBikeType(bike.basic) 
  }, isPro)


  return (
    <>
    <SideBar />
      <HeroSection
        isPro={isPro}
        title={bikeType.name}
        titleStyle={bikeType.nameStyle}
        background={bikeType.background}
      >
        <>
          <img
            src={bikeType.decoration}
            alt="Logo"
            className="decoration"
            style={{ mixBlendMode: bikeType.blendMode }}
          />
          <img
            src={bikeType.imageHero}
            alt="Logo"
            className="hero-bike"
          />
        </>
      </HeroSection>

      {/*<section className="section-full bg-black custom-section">
        <div className="container">
          <h2 className="text-center w-60 center mb-3 text-shadow text-white">
            BICICLETAS
            <span style={{ color: bike.color }}>URBANAS</span>Y ALGO MAS
            PIOLA POR ACA
          </h2>
          <h3 className="subtitle text-center w-60 center mb-6 text-gray">
            Et dolorem unde voluptatem odio suscipit ad occaecati ex est.
            Nostrum animi consequuntur suscipit molestiae error. Ut
            assumenda
          </h3>
          <IconsContainer iconItems={bike.iconItems}></IconsContainer>
        </div>
      </section>*/}
      <section className="section-half pt-0 pb-0 custom-section">
        <div className="row">
          <div className="col-6 bg-bike-black"></div>
          <div
            className="col-6 bg-black width-full m-0"
            style={{
              justifyContent: "center",
              display: "flex",
              height: "100vh",
              marginBottom: "0px",
            }}
          >
            <BikeInfo
              title={bike.name}
              hasPro={bike.pro ? true : false}
              isPro={isPro}
              setIsPro={setIsPro}
              bike={bikeType}
            />
          </div>
        </div>
      </section>
      <section className="section-half pb-0 custom-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="title">
                ¿Querés saber más sobre la{" "}
                <span className="uppercase" style={{ color: bike.color }}>
                  {bike.name}
                </span>
                ?
              </h1>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
