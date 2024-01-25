import React, { useEffect } from 'react'
import Giscus from '@giscus/react';
import "./Comment.css";
import { useTranslation } from 'react-i18next';

function Comment(props) {
  const { t, i18n } = useTranslation();

    useEffect(() => {
        props.setPage(true);
        props.setPageTitle(t("commentTitle"));
      }, [])
  return (
    <section id="comment-section">
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
    </section>
  )
}

export default Comment