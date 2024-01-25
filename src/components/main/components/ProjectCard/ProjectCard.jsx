import React, { useEffect } from 'react'
import "./ProjectCard.css";
import { useTranslation } from 'react-i18next';

function ProjectCard(props) {
  const {t} = useTranslation();
  return (
    <div className='project-card-container'>
        <img src={props.img} alt="minecraft" />
        <div className='card-skills'>
            {props.tech.map((i, index) => <img src={i} alt="react" key={index}/>)}
        </div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <a className='project-link' href={`${props.link}`} target='_blank'>{t("projectLearnMore")}</a>
    </div>
  )
}

export default ProjectCard