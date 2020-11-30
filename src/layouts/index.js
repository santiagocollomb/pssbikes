import React, { useState } from "react"
import Footer from "../components/Footer/index"
import Cursor from "../components/Cursor/index"
import FullNavMenu from "../components/FullNavMenu/index"
import Transition from "../components/transition"

export default function Layout({ children, location }) {
  const [lightTheme, setLightTheme] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleTheme = () => {
    setLightTheme(!lightTheme)
  }

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  return (
    <>
      <div className={lightTheme ? "light-theme" : ""}>
        <Cursor />
        <FullNavMenu
          toggleTheme={toggleTheme}
          openMenu={openMenu}
          closeMenu={closeMenu}
          isOpen={menuIsOpen}
        />

        <Transition location={location} menuIsOpen={menuIsOpen}>
          {children}
        </Transition>

        <Footer menuIsOpen={menuIsOpen} />
      </div>
    </>
  )
}
