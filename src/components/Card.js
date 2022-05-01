import React from "react"
import starImg from "../images/star.png"
import profileImg from "../images/katie-zaferes.png"

function Card(props) {

  let badgeText

  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  const img = require(`../images/${props.item.coverImg}`)
  
  return (
      <div className="card">
        {badgeText ? <div className="card--badge">{badgeText}</div> : ""}
        <img src={img} className="card--img" alt="" />
        <div className="card--stats">
          <img src={starImg} className="card--star" alt="" />
          <span>{props.item.stats.rating}</span>
          <span className="grey">({props.item.stats.reviewCount}) • </span>
          <span className="grey">{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
      </div>
  )
}

export default Card