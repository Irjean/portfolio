import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Giscus from '@giscus/react';
import "./Comment.css";
import { useTranslation } from 'react-i18next';

function Comment(props) {
  const { t, i18n } = useTranslation();

    useEffect(() => {
        props.setPage(true);
        props.setPageTitle(t("commentTitle"));
        props.setPageHighlight("comment");
      }, [])
  return (
    <motion.section id="comment-section"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.3, ease: "easeInOut"}}
      exit={{opacity: 0}}
    >
        <h2>{t("commentPageTitle")}</h2>
        <Giscus 
        id='giscus'
        src="https://giscus.app/client.js"
        repo="Irjean/portfolio"
        repoId="R_kgDOLFjLQw"
        category="Thoughts"
        categoryId="DIC_kwDOLFjLQ84CcdTT"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={props.lightMode ? "light" : "dark"}
        lang={i18n.language}
        crossorigin="anonymous"
        async
        />
    </motion.section>
  )
}

export default Comment