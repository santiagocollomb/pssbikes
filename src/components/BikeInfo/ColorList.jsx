import React from "react"

import "./style.styl"

export default function ColorList({colors}) {
  return (
    <div className="colors-container">
      {colors.map(color => ( 
        <div
          className="bike-color"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  )
}
