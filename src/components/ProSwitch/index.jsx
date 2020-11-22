import React from 'react'
import Switch from "react-input-switch"
import "./style.styl"

export default function ProSwitch({ isPro, setIsPro }) {

  return (
    <div className={isPro === "yes" ? "proswitch active" : "proswitch"}>
      <Switch on="yes" off="no" value={isPro} onChange={setIsPro} />
      <span className="ml-3">versión pro</span>
    </div>
  )
}