import React from "react"
import starImg from "../images/star.png"
import profileImg from "../images/katie-zaferes.png"

function Card() {
    return (
        <div className="card">
          <img src={profileImg} className="card--img" />
          <div className="card--stats">
            <img src={starImg} className="card--star" />
            <span>5.0</span>
            <span className="grey">(6) • </span>
            <span className="grey">USA</span>
          </div>
          <p>Life lessons with Katie</p>
          <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card