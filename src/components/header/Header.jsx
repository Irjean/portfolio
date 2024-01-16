import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
//components
import ProfileCard from './ProfileCard/ProfileCard'
import LightCard from './LightCard/LightCard'
import LangageCard from './LangageCard/LangageCard'
import Card from './Card/Card'
//images
import messageImg from "../../assets/img/message.png";
import bookImg from "../../assets/img/book.png";
import adobeImg from "../../assets/img/adobe.png";
import mailImg from "../../assets/img/mail.png";
import contactImg from "../../assets/img/message.png";
import docsImg from "../../assets/img/docs.png";

function Header(props) {
    const { t } = useTranslation();

  return (
    <header className={props.page ? "App-header side" : "App-header"}>
      <div>
        <h1>{t("welcome")}</h1>
        <Link to="/profile">
          <ProfileCard/>
        </Link>
        <div className='card-container'>
          <LightCard />
          <LangageCard />
        </div>
        <div className='card-container'>
          <Link to="/profile"><Card content={t("tools")} image={contactImg} /></Link>
          <Link to="/profile"><Card content={t("exp")} image={docsImg} /></Link>
          <Link to="/profile"><Card content={t("project")} image={bookImg} /></Link>
        </div>
        <div className='card-container'>
        <Link to="/profile"><Card content="Contact" image={mailImg} /></Link>
        <a href="Spileers_Clement.pdf" download><Card content={t("downloadCv")} image={adobeImg} /></a>
        <Link to="/profile"><Card content={t("comment")} image={messageImg} /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header