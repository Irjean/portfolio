import React, { useEffect } from 'react'
import "./NotFound.css";

function NotFound(props) {
    useEffect(() => {
        props.setPage(true);
        props.setPageTitle("404");
    }, []);

  return (
    <section id='not-found'>
            <h3>Il semble que cette page n'existe pas...</h3>
    </section>
  )
}

export default NotFound