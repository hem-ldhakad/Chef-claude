import React from "react";
import icon from "./Chef Claude Icon.png"
export default function Nav() {
    return (
        <div className="nav">
            <img className="icon" src={icon} alt=""/>
            <p className="title">Chef Claude</p>
        </div>
    )
}