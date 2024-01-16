import React from 'react'
import profileImage from "../../../assets/img/mwa.png";
import rightArrow from "../../../assets/img/right-arrow.png";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div id="profile-card">
        <img className="profile-image" src={profileImage} alt="ma grosse t^tete" />
        <div className="presentation">
            <h2>Clément Spileers</h2>
            <span>Dévelopeur Fullstack</span>
        </div>
        <img className="right-arrow" src={rightArrow} alt="fleche" />
    </div>
  )
}

export default ProfileCard