import React from 'react'
import { Transition } from "react-transition-group";
import { animateIn, animateOut } from "../../utils/animations";
import TopNav from "../TopNav/index"
import './style.styl'

export default function HeroSection (props) { 
  return (
    <section
      className="section-full bg-hero"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <TopNav />
      <div className="hero-content">
        <Transition
          key={props.biciImg}
          in
          appear
          onEnter={animateIn}
          onExit={animateOut}
          timeout={500}
        >
          {props.children}
        </Transition>
        <Transition
          key={props.title}
          in
          appear
          onEnter={animateIn}
          onExit={animateOut}
          timeout={500}
        >
          <div className="hero-title">
            <h1 className={`${props.titleStyle}`}>{props.title}</h1>
          </div>
        </Transition>
      </div>
    </section>
  )
}
