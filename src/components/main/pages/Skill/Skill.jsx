import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import "./Skill.css";
import SkillCard from '../../components/SkillCard/SkillCard';
//Import images
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
import nuxtImg from "../../../../assets/img/tech/nuxt.png";
import svelteImg from "../../../../assets/img/tech/svelte.png";
import solidImg from "../../../../assets/img/tech/solid.png";
import symphonyImg from "../../../../assets/img/tech/symphony.png";
import cSharpImg from "../../../../assets/img/tech/c-sharp.png";
import javaImg from "../../../../assets/img/tech/java.png";

function Skill(props) {
  const {t} = useTranslation();
  const imgArray = [nuxtImg, svelteImg, solidImg, symphonyImg, cSharpImg, javaImg];
  const [comingImg, setComingImg] = useState(imgArray[0]);

  useEffect(() => {
    props.setPage(true);
    props.setPageTitle(t("tools"));
    props.setPageHighlight("skill");
}, []);

useEffect(() => {
  setTimeout(() => {
    if(imgArray[imgArray.findIndex((i) => i == comingImg) + 1] == undefined){
      setComingImg(imgArray[0])
    } else {
      setComingImg(imgArray[imgArray.findIndex((i) => i == comingImg) + 1]);
    }
  }, 1500)
}, [comingImg])

  const animateTop = {
    initial: {opacity: 0, y: -100},
    animate: (delayTime) => ({opacity: 1, y: 0, transition: {delay: delayTime * 0.15}}),
    exit: {opacity: 0, y: -100}
  }

  const animateRight = {
    initial: {opacity: 0, x: 100},
    animate: (delayTime) => ({opacity: 1, x: 0, transition: {delay: delayTime * 0.15}}),
    exit: {opacity: 0, x: 100}
  }

  const animateLeft = {
    initial: {opacity: 0, x: -100},
    animate: (delayTime) => ({opacity: 1, x: 0, transition: {delay: delayTime * 0.15}}),
    exit: {opacity: 0, x: -100}
  }

  return (
    <motion.section id='skill-section'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.3, ease: "easeOut"}}
      exit={{opacity: 0}}
    >
      <div className='skill-card-container'>
        <SkillCard img={reactIcon} title={"React"} animation={animateTop} delayTime={0} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={vueIcon} title={"Vue"} animation={animateLeft} delayTime={1} />
        <SkillCard img={!props.lightMode ? threeWhiteIcon : threeIcon} title={"ThreeJS"} animation={animateRight} delayTime={2} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={laravelIcon} title={"Laravel"} animation={animateLeft} delayTime={3} />
        <SkillCard img={firebaseIcon} title={"Firebase"} animation={animateRight} delayTime={4} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={sassIcon} title={"Sass"} animation={animateLeft} delayTime={5} />
        <SkillCard img={!props.lightMode ? nextWhiteIcon : nextIcon} title={"NextJS"} animation={animateRight} delayTime={6} />
      </div>
      <div className='skill-card-container'>
        <SkillCard img={nodeIcon} title={"NodeJS"} animation={animateLeft} delayTime={7} />
        <SkillCard img={comingImg} title={t("skillMoreToCome")} animation={animateRight} delayTime={8} />
      </div>
    </motion.section>
  )
}

export default Skill