import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import "./Profile.css";
import profileImg from "../../../../assets/img/mwa.png";
import { useTranslation } from 'react-i18next';

function Profile(props) {
  const { t } = useTranslation();
  useEffect(() => {
    props.setPage(true);
    props.setPageTitle(t("profile"));
    props.setPageHighlight("profile-card");
  }, [])
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.3, ease: "easeOut"}}
      exit={{opacity: 0}}
    >
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
    </motion.div>
  )
}

export default Profile