import React from 'react'
import "./SkillCard.css";

function SkillCard(props) {
  return (
    <div className={`skill-card ${props.title}`}>
        <img src={props.img} alt="macompétencezzbi" />
        <h3>{props.title}</h3>
    </div>
  )
}

export default SkillCard