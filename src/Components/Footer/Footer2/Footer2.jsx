import React from 'react'
import "./Footer2.scss"

export default function Footer2() {
    return (
        <div className="contacto">
            <div className="form-container">
                <p>Déjanos tus datos, <b>un experto te contactará</b></p>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Teléfono" />
                <input type="text" placeholder="Empresa" />
                <input type="text" placeholder="Consulta" />
                <button>Contáctanos</button>
            </div>
        </div>
    )
}
