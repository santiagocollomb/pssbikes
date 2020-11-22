import React from "react"
import "./style.styl"

export default function ContactForm({bikeName, color}) {

  return (
    <>
      {bikeName ? (
        <>
          <h2 className="title-bike text-bold mb-0">
            ¿Te interesa la pss <span style={{ color: color }}>{bikeName}</span>
            ?
          </h2>
          <h3 className="subtitle mt-1">
            Solicitanos un presupuesto o un test drive. <br /> Te responderemos
            lo antes posible.
          </h3>
        </>
      ) : (
        <>
          <h2 className="title text-red text-bold mb-0">Contacto</h2>
          <h3 className="subtitle mt-1">
            Solicitanos un presupuesto o un test drive. <br /> Te responderemos
            lo antes posible.
          </h3>
        </>
      )}

      <form action="">
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Juan Perez" />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="2981234567"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="juan-p@gmail.com"
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" rows="2"></textarea>
        </div>

        <button className="btn btn-black hoverable" type="submit">
          Enviar
        </button>
      </form>
    </>
  )

}
