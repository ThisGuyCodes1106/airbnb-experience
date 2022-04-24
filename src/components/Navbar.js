import React from "react";
import logo from "../images/airbnb-logo.png"

function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo" alt="" />
    </nav>
  )
}

export default Navbar