import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from "react-image-lightbox"

import "react-image-lightbox/style.css"
import "swiper/swiper-bundle.min.css"
import './style.styl'

export default function SecrionBikeGallery({gallery}) {

  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState()

  const openImage = index => {
    setIsOpen(true)
    setPhotoIndex(index)
    console.log(index)
  }

  return (
    <>
      <section className="section-half bg-primary pt-0">
        <Swiper
          spaceBetween={500}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
        >
          {gallery.map((image, i) => (
            <SwiperSlide key={image}>
              <div
                className="gallery-image hoverable"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => openImage(i)}
              ></div>
              <p className="gallery-count">
                0{i + 1} <span> /0{gallery.length}</span>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {isOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={gallery[photoIndex]}
          nextSrc={gallery[(photoIndex + 1) % gallery.length]}
          prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.length)
          }
        />
      )}
    </>
  )
}