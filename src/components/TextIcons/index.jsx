import React from 'react'
import './style.styl'

export default function TextIcons (props) {
  return (
    <div className="container">
      <div
        className="text-icons-container"
        style={{ backgroundColor: props.color }}
      >
        <h1> {props.title} </h1>
        <h2> {props.subtitle} </h2>
      </div>
    </div>
  )
}