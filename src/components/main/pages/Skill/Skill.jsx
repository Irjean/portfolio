import React, { useEffect } from 'react';
import "./Skill.css";
import SkillCard from '../../components/SkillCard/SkillCard';
import htmlIcon from "../../../../assets/img/tech/html-5.png";
import cssIcon from "../../../../assets/img/tech/css3.png";
import jsIcon from "../../../../assets/img/tech/javascript.png";
import reactIcon from "../../../../assets/img/tech/react-icon.png";
import firebaseIcon from "../../../../assets/img/tech/firebase.png";
import laravelIcon from "../../../../assets/img/tech/laravel.png";
import vueIcon from "../../../../assets/img/tech/vue.svg";
import threeIcon from "../../../../assets/img/tech/three.png";
import threeWhiteIcon from "../../../../assets/img/tech/three-white.png";
import sassIcon from "../../../../assets/img/tech/sass.png";
import nextIcon from "../../../../assets/img/tech/next.png";
import nextWhiteIcon from "../../../../assets/img/tech/nextwhite.png";
import nodeIcon from "../../../../assets/img/tech/node-js.png";
import { useTranslation } from 'react-i18next';

function Skill(props) {
  const {t} = useTranslation();
  useEffect(() => {
    props.setPage(true);
    props.setPageTitle(t("tools"));
}, [])
  return (
    <section id='skill-section'>
      <div className='skill-card-container'>
        <SkillCard img={reactIcon} title={"React"} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={vueIcon} title={"Vue"} />
        <SkillCard img={!props.lightMode ? threeWhiteIcon : threeIcon} title={"ThreeJS"} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={laravelIcon} title={"Laravel"} />
        <SkillCard img={firebaseIcon} title={"Firebase"} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={sassIcon} title={"Sass"} />
        <SkillCard img={!props.lightMode ? nextWhiteIcon : nextIcon} title={"NextJS"} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={nodeIcon} title={"NodeJS"} />
        <SkillCard img={reactIcon} title={t("skillMoreToCome")} />
      </div>
    </section>
  )
}

export default Skill