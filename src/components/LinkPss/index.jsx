import React from 'react'
import { Link } from "gatsby"

import './style.styl'

export default function LinkPss({text, to}) {
  return (
    <Link className="link link-arrowed hoverable" to={to}>
      <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g
          fill="none"
          stroke="#2175FF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <circle
            className="arrow-icon-circle"
            cx="16"
            cy="16"
            r="15.12"
          ></circle>
          <path className="arrow-icon-arrow" d="M8.23 16h13.98"></path>
        </g>
      </svg>
      {text}
    </Link>
  )
}