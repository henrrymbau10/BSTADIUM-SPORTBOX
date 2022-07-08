import React from 'react'
import "./Powerby.scss"
import bstadium from "../../Assets/Icons/bstadiumlogo.svg"

export default function Powerby() {
    return (
        <div className="powerby">
            <div className="powerby-container">
                <p>Powered by</p>
                <img src={bstadium} alt="" />
            </div>
        </div>
    )
}
