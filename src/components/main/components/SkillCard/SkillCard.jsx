import React from 'react'
import { motion } from "framer-motion";
import "./SkillCard.css";

function SkillCard(props) {
  return (
    <motion.div className={`skill-card ${props.title}`} custom={props.delayTime} variants={props.animation} initial="initial" animate="animate" exit="exit" >
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
    </motion.div>
  )
}

export default SkillCard