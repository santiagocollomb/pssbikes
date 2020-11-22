import React from 'react'
import { Link } from "gatsby"


export default function notFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <h3 className="not-found-subtitle">Not Found</h3>
      <h2 className="not-found-second-subtitle">La página no existe.</h2>
      <Link to="/" className="hoverable">
        Ir al inicio
      </Link>
    </div>
  )
}