import React, { useEffect, useState } from 'react'
import "./LangageCard.css";
import { useTranslation } from 'react-i18next';
import ukImg from "../../../assets/img/uk.png";
import frImg from "../../../assets/img/french.png";

function LangageCard() {
  const { i18n } = useTranslation();
  let [lang, setLang] = useState(localStorage.getItem("lang") !== undefined ? localStorage.getItem("lang") : "fr");
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className='langage-card card'>
        <img src={i18n.language === "fr" ? frImg : ukImg} className="card-image" alt="soleil" />
        <div className='right-part'>
            <span>{t("lang")}</span>
            <select name="lang" id="lang" onChange={(e) => {setLang(e.target.value); localStorage.setItem("lang", e.target.value)}} defaultValue={lang}>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
        </div>
    </div>
  )
}

export default LangageCard