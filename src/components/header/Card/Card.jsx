import React from 'react'
import luneImg from "../../../assets/img/lune.png";
import rightArrow from "../../../assets/img/right-arrow.png";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
        <img className="card-image" src={props.image} alt="ma grosse t^tete" />
        <div className='right-part'>
          <span>{props.content}</span>
          <img className="right-arrow" src={rightArrow} alt="fleche" />
        </div>
    </div>
  )
}

export default Card