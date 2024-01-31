import React from 'react'
import rightArrow from "../../../assets/img/right-arrow.png";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" id={props.class}>
        <img className="card-image" src={props.image} alt="ma grosse t^tete" />
        <div className='right-part'>
          <span>{props.content}</span>
          <img className="right-arrow" src={props.replaceArrow ? props.replaceArrow : rightArrow} alt="fleche" />
        </div>
    </div>
  )
}

export default Card