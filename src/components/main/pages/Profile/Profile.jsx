import React, { useEffect } from 'react'
import "./Profile.css";
import profileImg from "../../../../assets/img/mwa.png";
import { useTranslation } from 'react-i18next';

function Profile(props) {
  const { t } = useTranslation();
  useEffect(() => {
    props.setPage(true);
    props.setPageTitle(t("profile"));
  }, [])
  return (
    <>
    <section className='profile'>
      <div className='image-container'>
        <img src={profileImg} alt="mwa" />
        <h3>Clément Spileers</h3>
        <span>{t("profileJob")}</span>
      </div>
    </section>
    <section id='presentation'>
      <h4>{t("profilePresTitle")}</h4>
      <p>
      {t("profilePresContent")}
      </p>
      <br />
      <p>
      {t("profilePresContentBis")}
      </p>
    </section>
    <section id='activity'>
      <h4>{t("profileActivityTitle")}</h4>
      <p>
      {t("profileActivityContent")}
      </p>
    </section>
    </>
  )
}

export default Profile