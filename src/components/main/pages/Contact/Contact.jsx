import React, { useEffect, useRef, useState } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import Card from '../../../header/Card/Card';
import emailImg from "../../../../assets/img/mail.png";
import githubImg from "../../../../assets/img/github.png";
import phoneImg from "../../../../assets/img/phone.png";
import { useTranslation } from 'react-i18next';

function Contact(props) {
    const {t} = useTranslation();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [resultMsg, setResultMsg] = useState("");
    const form = useRef();

useEffect(() => {
    props.setPage(true);
    props.setPageTitle("Contact");
}, [])

const sendEmail = (e) => {
    e.preventDefault();
    setBtnDisabled(true);

    let templateParams = {
        from_email: form.current.user_email.value,
        from_name: form.current.user_name.value,
        message: form.current.message.value
    }


    emailjs.send('service_bx3hsmf', 'template_p8txfl3', templateParams, 'FoHYAEkxeY6GBt-Ez')
      .then((result) => {
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#form-message").value = "";
            setResultMsg("Message envoyé !");
            setBtnDisabled(false);
      }, (error) => {
            setResultMsg("Il y a eu une erreur.")
            setBtnDisabled(false);
      });
  };

return (
    <section id='contact-container'>
        <h2>{t("contactLinkTitle")}</h2>
        <div className='card-container'>
            <a href="mailto:c.spileers@outlook.fr"><Card content="c.spileers@outlook.fr" image={emailImg} /></a>
            <a href="https://github.com/Irjean" target='_blank'><Card content="Github" image={githubImg} /></a>
            <a href="tel:+33760474171"><Card content="+33 7 60 47 41 71" image={phoneImg} /></a>
        </div>
        <h3>{t("contactFormTitle")}</h3>
        <form ref={form} onSubmit={sendEmail} id='contact-form'>
            <label>{t("contactNameLabel")}</label>
            <input type="text" name="user_name" id='name' placeholder={t("contactNameInput")} />
            <label>{t("contactEmailLabel")}</label>
            <input type="email" name="user_email" id='email' placeholder={t("contactEmailInput")} />
            <label>{t("contactMessageLabel")}</label>
            <textarea name="message" id='form-message' placeholder={t("contactMessageInput")} maxLength="1000"/>
            <button type="submit" value="Send" id='form-button' disabled={btnDisabled}>{t("contactFormButton")}</button>
            <p>{resultMsg}</p>
        </form>
    </section>
)
}

export default Contact