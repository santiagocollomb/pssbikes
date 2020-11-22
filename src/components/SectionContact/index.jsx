import React from 'react'
import ContactForm from '../ContactForm/index'
import './style.styl'

export default function SectionHero ({bikeName, color}) { 

  return (
    <section id="contacto" className="section-half pb-0 pt-0 bg-primary">
      <div className="row">
        <div className="col-6 bg-contact width-full m-0"></div>
        <div className="col-6 width-full flex h-100 m-0 p-0">
          <div className="container align-center">
            <ContactForm bikeName={bikeName} color={color} />
          </div>
        </div>
      </div>
    </section>
  )
}
