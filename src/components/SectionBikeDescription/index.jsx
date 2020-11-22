import React, { useEffect, useState } from "react"

import './style.styl'

export default function SectionBikeDescription({bike}) {

  const [xy, setXy] = useState(10)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, []);

  const handleScroll = () => {
    setXy(-window.scrollY / 5 + 200)
  }
  
 return (
   <section
     id="bike-description"
     className="section-half pb-0 bg-primary"
   >
     <h2 className="bg-text" style={{ transform: `translate(${xy}px, 0px)` }}>
       {bike.name}
     </h2>
     <img src={bike.descriptionImg} alt="" className="description-img" />
     <div className="description-content">
       <h2 className="description-title">{bike.title}</h2>
       <p className="description-text">{bike.description}</p>
     </div>
   </section>
 )
}