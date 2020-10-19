import React, {useState} from 'react'
import { Link } from "gatsby"
import data from '../../content/data.json'
import LogoDark from '../../assets/logo-dark.svg'
import './style.styl'

export default function SideBar() {

  const [isOpen, setIsOpen] = useState(false)

  const bikes = data.bikes

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <nav>
        <div className="logo-space">
          <img src={LogoDark} alt="" className="side-nav-logo"/>
          <div className="menu-icon" onClick={() => handleClick()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className="bikes-menu">
          {bikes.map(bike => {
            return (
              <Link
                to={`/${bike.page}`}
                key={bike.basic.name}
              >

                <img src={bike.basic.image} alt="" className="bikes-menu-bike" />
                <p>- {bike.basic.name} -</p>

              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}