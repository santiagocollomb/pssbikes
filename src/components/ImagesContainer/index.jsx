import React from "react"
import "./style.styl"

export default function ImagesContainer(props) { 

  const imageItems = props.images.map((image, key) => (
    <div className="image-item" key={image + key}>
      <img
        src={image}
        alt=""
      />
    </div>
  ))

  return <div className="images-container">{imageItems}</div>

}
