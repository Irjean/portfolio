import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import "./PageHeader.css";
import { Link } from 'react-router-dom';
import leftArrow from "../../../../assets/img/left-arrow.png";

function PageHeader(props) {
  const width = useWindowSize();

  function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

  return (
    <motion.div className='top-page'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.3, ease: "easeOut"}}
      exit={{opacity: 0}}
    >
        <div className={`back-button ${width > 780 ? "hidden" : ""}`}>
          <Link to="/" onClick={() => props.setPage(false)}>
            <img src={leftArrow} alt="retour" />
            <span>Accueil</span>
          </Link>
        </div>
        <h2>{props.pageTitle}</h2>
        <div className={width > 780 ? "hidden" : ""}></div>
      </motion.div>
  )
}

export default PageHeader