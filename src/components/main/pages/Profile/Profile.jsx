import React, { useEffect } from 'react'
import "./Profile.css";
import PageHeader from '../../components/PageHeader/PageHeader';
import profileImg from "../../../../assets/img/mwa.png";

function Profile(props) {
  useEffect(() => {
    props.setPage(true);
  }, [])
  return (
    <>
    <section className='profile'>
      <div className='image-container'>
        <img src={profileImg} alt="mwa" />
        <h3>Clément Spileers</h3>
        <span>Développeur Fullstack</span>
      </div>
    </section>
    <section id='presentation'>
      <h4>Présentation</h4>
      <p>
        Je suis un développeur fullstack utilisant principalement React et NodeJS. Je suis polyvalant et je sais m'adapter aux différents besoins techniques qui s'imposent à moi.
      </p>
      <br />
      <p>
        Autonome sans pour autant délaisser l'esprit d'épique, je sais me rendre utiles dans tout types d'envrionnements dans le but d'être le plus productif et éfficace.
      </p>
    </section>
    </>
  )
}

export default Profile