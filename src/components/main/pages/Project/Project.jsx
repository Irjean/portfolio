import React, { useEffect, useState } from 'react'
import "./Project.css";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
//images des projets
import articleImg from "../../../../assets/img/projects/Articleweb.png";
import deezerImg from "../../../../assets/img/projects/deezweb.png";
import pokeImg from "../../../../assets/img/projects/pokeweb.png";
import reactImg from "../../../../assets/img/projects/react.png";
import chatImg from "../../../../assets/img/projects/WeChat.png";
import minecraftImg from "../../../../assets/img/projects/minecraft.png";
//images de technos
import htmlIcon from "../../../../assets/img/tech/html-5.png";
import cssIcon from "../../../../assets/img/tech/css3.png";
import jsIcon from "../../../../assets/img/tech/javascript.png";
import reactIcon from "../../../../assets/img/tech/react-icon.png";
import firebaseIcon from "../../../../assets/img/tech/firebase.png";
import laravelIcon from "../../../../assets/img/tech/laravel.png";
import vueIcon from "../../../../assets/img/tech/vue.svg";
import threeIcon from "../../../../assets/img/tech/three.png";
import threeWhiteIcon from "../../../../assets/img/tech/three-white.png";
import { useTranslation } from 'react-i18next';

function Project(props) {
  const {t} = useTranslation();
  let [images, setImages] = useState([reactIcon, threeWhiteIcon]);
  useEffect(() => {
    if(props.lightMode == true){
      setImages([reactIcon, threeIcon]);
    }
    props.setPage(true);
    props.setPageTitle(t("project"));
}, [])
  return (
    <section id='project-section'>
      <h3>{t("projectPageTitle")}</h3>
      <div id='project-container'>
        <ProjectCard img={articleImg} tech={[htmlIcon, cssIcon, jsIcon]} link="projects/ArticleWeb/index.html" title="Article web" content={t("projectArticleContent")}/>
        <ProjectCard img={reactImg}  tech={[reactIcon]} link="projects/Todo/index.html" title="Todo React" content={t("projectTodoContent")} />
        <ProjectCard img={deezerImg}  tech={[htmlIcon, cssIcon, jsIcon]} link="projects/DeezWeb/index.html" title="Deez'Web" content={t("projectDeezerContent")} />
        <ProjectCard img={pokeImg}  tech={[reactIcon]} link="projects/Pokeweb/index.html" title="PokeWeb" content={t("projectPokemonContent")} />
        <ProjectCard img={chatImg}  tech={[reactIcon, firebaseIcon]} link="https://wechat-d3a4b.web.app/" title="WeChat" content={t("projectChatContent")} />
        <ProjectCard img={minecraftImg}  tech={images} link="projects/Minecraft/index.html" title="ThreeCraft" content={t("projectMinecraftContent")} />
      </div>
    </section>
  )
}

export default Project