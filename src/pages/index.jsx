import React from "react"

import SideBar from '../components/SideBar/index'
import HeroSection from "../components/HeroSection/index"
import BikeInfo from "../components/BikeInfo/index"
import ContactForm from "../components/ContactForm/index"

import data from "../content/data"

export default function Home() {

  const pss = data.pss

  const bikesMap = data.bikes.map((bike, key) =>
    key % 2 === 0 ? (
      <section className='section-half pt-0 pb-0' key={bike.id}>
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
            <BikeInfo {...bike} />
          </div>
        </div>
      </section>
    ) : (
      <section className='section-half pt-0 pb-0' key={bike.id}>
        <div className="row">
          <div
            className="col-6 bg-black width-full m-0"
            style={{
              justifyContent: "center",
              display: "flex",
              height: "100vh",
              marginBottom: "0px",
            }}
          >
            <BikeInfo {...bike} />
          </div>
          <div className="col-6 bg-bike-black"></div>
        </div>
      </section>
    )
  )
  return (
    <>
    <SideBar />
      <HeroSection title={pss.title}>
        <img src={pss.img} alt="Logo" className="hero-bike" />
      </HeroSection>
      {bikesMap}
      <section className='section-half pb-0'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="title">
                ¿Querés saber más sobre la PSS BIKES?
              </h1>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
