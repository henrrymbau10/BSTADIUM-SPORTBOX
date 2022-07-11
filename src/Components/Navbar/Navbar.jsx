import React from 'react'
import "./Navbar.scss"
import logo from "../../Assets/Desktop/sportbox.svg"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            {/* <div>
                <button> DESCUBRE NUESTRO CATÁLOGO</button>
            </div> */}
        </div>
    )
}
