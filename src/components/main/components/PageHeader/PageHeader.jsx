import React from 'react'
import "./PageHeader.css";
import { Link } from 'react-router-dom';
import leftArrow from "../../../../assets/img/left-arrow.png";

function PageHeader(props) {
  return (
    <div className='top-page'>
        <div className='back-button'>
          <Link to="/" onClick={() => props.setPage(false)}>
            <img src={leftArrow} alt="retour" />
            <span>Accueil</span>
          </Link>
        </div>
        <h2>{props.pageTitle}</h2>
        <div></div>
      </div>
  )
}

export default PageHeader