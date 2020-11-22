import React from 'react'
import { useSpring, animated } from "react-spring"

import './style.styl'

export default function SectionHero (props) { 

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 800, friction: 100 },
  }))

  return (
    <section
      className="section-full bg-hero"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div
        className="container"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <div className="hero-content">
          <animated.div
            className="hero-title-animation"
            style={{ transform: springProps.xy.interpolate(trans) }}
          >
            <div className="hero-title">
              <h1 className={`${props.titleStyle}`}>{props.title}</h1>
            </div>
          </animated.div>

          {props.children}

          {props.decoration && <img
            src={props.decoration}
            alt="Logo"
            className="decoration"
            style={{ mixBlendMode: props.blendMode, opacity: props.blendMode === 'screen' ? 0.8 : 1 }}
          />}
        </div>
      </div>
    </section>
  )
}
