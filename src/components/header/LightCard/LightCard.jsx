import React, { useEffect, useState } from 'react'
import "./LightCard.css";
import sunImg from "../../../assets/img/soleil.png";
import { useTranslation } from 'react-i18next';

function LightCard() {
    let root = document.querySelector(":root");
    const { t } = useTranslation();
    let [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        if(lightMode){
        root.style.setProperty("--main-color", "#f3f2f8");
        root.style.setProperty("--secondary-color", "#ffffff");
        root.style.setProperty("--hover-color", "#e6e5eb");
        root.style.setProperty("--slider-color", "#e9e9eb");
        root.style.setProperty("--line-color", "#2c2c2e21");
        root.style.setProperty("--text-color", "black");
        console.log("oe")
        } else {
        root.style.setProperty("--main-color", "black");
        root.style.setProperty("--secondary-color", "#1c1c1e");
        root.style.setProperty("--hover-color", "#2c2c2e");
        root.style.setProperty("--slider-color", "#39383d");
        root.style.setProperty("--line-color", "#c7c6c66e");
        root.style.setProperty("--text-color", "white");
        }
    }, [lightMode])

  return (
    <div className='light-mode card'>
        <img src={sunImg} alt="soleil" />
        <div className='right-part'>
            <span>{t("light")}</span>
            <label htmlFor="light-input" className='switch'>
            <input id="light-input" type="checkbox" name='light-input' onChange={() => setLightMode(!lightMode)} />
            <span className='slider'></span>
            </label>
        </div>
    </div>
  )
}

export default LightCard