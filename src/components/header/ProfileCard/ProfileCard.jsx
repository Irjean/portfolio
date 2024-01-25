import React from 'react'
import profileImage from "../../../assets/img/mwa.png";
import rightArrow from "../../../assets/img/right-arrow.png";
import "./ProfileCard.css";
import { useTranslation } from 'react-i18next';

function ProfileCard() {
  const {t} = useTranslation();
  return (
    <div id="profile-card">
        <img className="profile-image" src={profileImage} alt="ma grosse t^tete" />
        <div className="presentation">
            <h2>Clément Spileers</h2>
            <span>{t("profileJob")}</span>
        </div>
        <img className="right-arrow" src={rightArrow} alt="fleche" />
    </div>
  )
}

export default ProfileCard