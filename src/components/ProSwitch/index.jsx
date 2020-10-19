import React from 'react'
import Switch from "react-input-switch"
import "./style.styl"

export default function ProSwitch({ isPro, setIsPro }) {

  return (
    <div className="proswitch">
      <Switch on="yes" off="no" value={isPro} onChange={setIsPro} />
      <span className={isPro === 'yes' ? "ml-3 active" : "ml-3"}> VERSIÓN PRO </span>
    </div>
  )
}