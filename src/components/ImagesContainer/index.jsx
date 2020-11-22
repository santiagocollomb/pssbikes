import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

import "react-image-lightbox/style.css"
import "./style.styl"

export default function ImagesContainer({images}) { 

  const [ isOpen, setIsOpen ] = useState(false)
  const [ photoIndex, setPhotoIndex ] = useState()

  const openImage = (index) => {
    setIsOpen(true)
    setPhotoIndex(index)
    console.log(index)
  }

  const imageItems = images.map((image, key) => (
    <div
      className="image-item hoverable"
      key={image + key}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={() => openImage(key)}
    ></div>
  ))

  return (
    <>
      <div className="images-container">{imageItems}</div>

      {isOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  )
  
}
