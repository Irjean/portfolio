import React from 'react'
import { motion } from "framer-motion";
import "./ProjectCard.css";
import { useTranslation } from 'react-i18next';

function ProjectCard(props) {
  const {t} = useTranslation();
  const animation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.div className='project-card-container' variants={animation}>
        <img src={props.img} alt="minecraft" />
        <div className='card-skills'>
            {props.tech.map((i, index) => <img src={i} alt="react" key={index}/>)}
        </div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <a className='project-link' href={`${props.link}`} target='_blank'>{t("projectLearnMore")}</a>
    </motion.div>
  )
}

export default ProjectCard