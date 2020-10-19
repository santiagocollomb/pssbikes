import React from "react"
import "./style.styl"

function IconItem(props) { 

  const iconItems = props.iconItems.map(iconItem => (
    <div className="icon-item" key={iconItem.title}>
      <img src={iconItem.icon} alt="" />
      <h3 className="w-80 mt-0 text-white">{iconItem.title}</h3>
      <p className="text-gray">{iconItem.text}</p>
    </div>
  ))

  return <div className="icons-container">{ iconItems }</div>

}

export default IconItem
