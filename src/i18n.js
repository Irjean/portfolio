import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
.use(initReactI18next)
.init({
    debug: true,
    lng: "en",
    fallbackLng: ["en", "fr"],
    resources: {
        en: {
            translation: {
                welcome: "Welcome !",
                light: "Light theme",
                lang: "Language",
                tools: "Skills",
                exp: "Work experience",
                project: "Projects",
                downloadCv: "Download my resume",
                comment: "Leave a comment"
            }
        },
        fr: {
            translation: {
                welcome: "Bienvenue !",
                light: "Thème clair",
                lang: "Langage",
                tools: "Compétences",
                exp: "Expériences",
                project: "Projets",
                downloadCv: "Télécharger mon CV",
                comment: "Laisser un commentaire"
            }
        }
    }
})