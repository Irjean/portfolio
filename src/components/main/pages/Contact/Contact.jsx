import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import "./Contact.css";
import emailjs from '@emailjs/browser';
import Card from '../../../header/Card/Card';
import emailImg from "../../../../assets/img/mail.png";
import githubImg from "../../../../assets/img/github.png";
import phoneImg from "../../../../assets/img/phone.png";
import exteriorLinkImg from "../../../../assets/img/exterior-link.png";
import { useTranslation } from 'react-i18next';

function Contact(props) {
    const {t} = useTranslation();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [resultMsg, setResultMsg] = useState("");
    const form = useRef();

    const animation = {
        initial: {opacity: 0, scale: .5},
        animate: {opacity: 1, scale: 1, transition: {delay: .1}},
        exit: {opacity: 0, scale: .5}
    }

useEffect(() => {
    props.setPage(true);
    props.setPageTitle("Contact");
    props.setPageHighlight("contact");
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
    <motion.section id='contact-container'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        exit={{opacity: 0}}
    >
        <h2>{t("contactLinkTitle")}</h2>
        <motion.div className='card-container' variants={animation} initial="initial" animate="animate" exit="exit">
            <a href="mailto:c.spileers@outlook.fr"><Card content="c.spileers@outlook.fr" image={emailImg} replaceArrow={exteriorLinkImg} /></a>
            <a href="https://github.com/Irjean" target='_blank'><Card content="https://github.com/Irjean" image={githubImg} replaceArrow={exteriorLinkImg} /></a>
            <a href="tel:+33760474171"><Card content="+33 7 60 47 41 71" image={phoneImg} replaceArrow={exteriorLinkImg} /></a>
        </motion.div>
        <h3>{t("contactFormTitle")}</h3>
        <motion.form ref={form} onSubmit={sendEmail} id='contact-form' variants={animation} initial="initial" animate="animate" exit="exit">
            <label>{t("contactNameLabel")}</label>
            <input type="text" name="user_name" id='name' placeholder={t("contactNameInput")}  required/>
            <label>{t("contactEmailLabel")}</label>
            <input type="email" name="user_email" id='email' placeholder={t("contactEmailInput")}  required/>
            <label>{t("contactMessageLabel")}</label>
            <textarea name="message" id='form-message' placeholder={t("contactMessageInput")} maxLength="1000" required/>
            <button type="submit" value="Send" id='form-button' disabled={btnDisabled}>{t("contactFormButton")}</button>
            <p>{resultMsg}</p>
        </motion.form>
    </motion.section>
)
}

export default Contact