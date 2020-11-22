import React from "react"
import SectionHome from "../components/SectionHome/index"
import SectionBikeInfo from "../components/SectionBikeInfo/index"
import SectionContact from "../components/SectionContact/index"

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
    
      <SectionHome />

      {bikesMap}

      <SectionContact />

    </>
  )
}
