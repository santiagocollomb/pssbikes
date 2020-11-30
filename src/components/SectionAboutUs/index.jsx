import React from "react"
import "./style.styl"

export default function SectionAboutUs() {
  return (
    <section id="about" className="section-half bg-primary pb-0 pt-0">
      <div className="row">
        <div className="col-6 width-full flex h-100 m-0 p-0">
          <div className="container align-center">
            <h2 className="title text-red text-bold mb-0">Nosotros</h2>
            <p className="text-light-gray">
              Nacimos en el 2017 en el cima de la Patagonia argentina. Aquel año
              creamos nuestra primer bici eléctrica, pero arrancamos mucho antes
              con planos y diseños. ¿Nuestro objetivo? Revolucionar el
              movimiento.
            </p>
            <hr />
            <p className="text-light-gray">
              Sabíamos que nuestra pss tenía que ser un vehículo superador que
              te permita moverte por la ciudad de la mejor manera. Contamos con
              diferentes modelos que se adaptan a los diferentes requerimientos
              que puede demandar una ciudad.
            </p>
            <p className="text-light-gray">
              Fabricamos los productos a medida, garantizando calidad y alto
              rendimiento, con componentes de primera línea.
            </p>
            <p className="text-light-gray">
              Queremos que nuestra comunidad salte límites y fronteras. Creamos
              un sistema de envío rápido, con instrucciones simples de armado
              para revolucionar el movimiento en La Quiaca, Palermo o Bariloche.
              Donde sea que estés.
            </p>
          </div>
        </div>
        <div className="col-6 bg-about-us width-full m-0"></div>
      </div>
    </section>
  )
}
