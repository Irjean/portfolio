import React, { useEffect } from 'react'
import "./Experience.css";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

function Experience(props) {
  const {t} = useTranslation();
  useEffect(() => {
    props.setPage(true);
    props.setPageTitle(t("exp"));
}, [])
  return (
    <motion.section id='exp-section'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.3, ease: "easeOut"}}
      exit={{opacity: 0, y: 100}}
    >
      <div id="timeline-content">
        <ul className="timeline">
          <li className="event" data-date="Février 2023 - Aout 2023">
            <h3>Smile</h3>
            <h4>{t("experienceSmileTitle")}</h4>
            <ul>
              <li>{t("experienceSmileContentOne")}</li>
              <li>{t("experienceSmileContentTwo")}</li>
            </ul>
          </li>
          <li className="event" data-date="Septembre 2021 - Septembre 2022">
            <h3>Standard En Ligne</h3>
            <h4>{t("experienceStandardTitle")}</h4>
            <ul>
              <li>{t("experienceStandardContentOne")}</li>
              <li>{t("experienceStandardContentTwo")}</li>
              <li>{t("experienceStandardContentThree")}</li>
              <li>{t("experienceStandardContentFour")}</li>
            </ul>
          </li>
          <li className="event" data-date="Avril 2021 - Aout 2021">
            <h3>HDM Network</h3>
            <h4>{t("experienceHdmTitle")}</h4>
            <ul>
              <li>{t("experienceHdmContentOne")}</li>
              <li>{t("experienceHdmContentTwo")}</li>
              <li>{t("experienceHdmContentThree")}</li>
              <li>{t("experienceHdmContentFour")}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="timeline-desktop">
        <div class="outer">
          <motion.div class="card" >
            <div class="info">
              <h3 class="title" data-date="Février 2023 - Aout 2023">Smile</h3>
              <h4>{t("experienceSmileTitle")}</h4>
              <ul>
                <li>{t("experienceSmileContentOne")}</li>
                <li>{t("experienceSmileContentTwo")}</li>
              </ul>
            </div>
          </motion.div>
          <motion.div class="card" >
            <div class="info">
              <h3 className='title' data-date="Septembre 2021 - Septembre 2022">Standard En Ligne</h3>
              <h4>{t("experienceStandardTitle")}</h4>
              <ul>
                <li>{t("experienceStandardContentOne")}</li>
                <li>{t("experienceStandardContentTwo")}</li>
                <li>{t("experienceStandardContentThree")}</li>
                <li>{t("experienceStandardContentFour")}</li>
              </ul>
            </div>
          </motion.div>
          <motion.div class="card">
            <div class="info">
              <h3 className='title' data-date="Avril 2021 - Aout 2021">HDM Network</h3>
              <h4>{t("experienceHdmTitle")}</h4>
              <ul>
                <li>{t("experienceHdmContentOne")}</li>
                <li>{t("experienceHdmContentTwo")}</li>
                <li>{t("experienceHdmContentThree")}</li>
                <li>{t("experienceHdmContentFour")}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience