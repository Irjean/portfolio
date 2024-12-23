import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
.use(initReactI18next)
.init({
    debug: false,
    lng: "fr",
    fallbackLng: ["en", "fr"],
    resources: {
        en: {
            translation: {
                welcome: "Welcome !",
                light: "Light theme",
                lang: "Language",
                profile: "Profile",
                tools: "Skills",
                exp: "Work experience",
                project: "Projects",
                downloadCv: "Download my resume",
                comment: "Leave a comment",
                commentTitle: "Comment",
                profileJob: "Fullstack Developer",
                profilePresTitle: "Who am I?",
                profilePresContent: "I'm a fullstack developer mostly using React and NodeJS. I'm versatile and I know how to adapt to the different technical needs facing me.",
                profilePresContentBis: "Autonomous without neglecting team spirit, I know how to make myself useful in all types of environments with the aim of being the most productive and efficient.",
                profileActivityTitle: "Actual situation",
                profileActivityContent: "Holding the title of Multimedia Developer at the RNCP, I am currently open to new opportunities.",
                skillMoreToCome: "More to come...",
                experienceSmileTitle: "Intern Javascript Developer R&D",
                experienceSmileContentOne: "Development of a 3D data visualisation app (ThreeJS)",
                experienceSmileContentTwo: "Development of a Metaverse (ThreeJS)",
                experienceStandardTitle: "Front-end Developer Apprentice",
                experienceStandardContentOne: "Integration of web pages (React)",
                experienceStandardContentTwo: "Development of a blog client-side and server-side (NextJS)",
                experienceStandardContentThree: "Development of a back-office (React, SASS, Tailwind)",
                experienceStandardContentFour: "Agile Method",
                experienceHdmTitle: "Intern Fullstack Developer",
                experienceHdmContentOne: "Integration of web pages (HTML, CSS, Javascript)",
                experienceHdmContentTwo: "Development of a mobile app (React Native, GraphQL, NestJS)",
                experienceHdmContentThree: "Development of an administrator page (TypeScript, React)",
                experienceHdmContentFour: "Agile Method",
                projectPageTitle: "Some demonstrations",
                projectLearnMore: "Try it!",
                projectArticleContent: "Redo of a web article to learn HTML and CSS.",
                projectTodoContent: "Creation of a todo list to become familiar with React.",
                projectDeezerContent: "Website that allows you to search for music samples thanks to the Deezer API.",
                projectPokemonContent: "Webapp allowing you to consult all the available pokémons and add some as favorites.",
                projectChatContent: "Online live chat made with Firebase.",
                projectMinecraftContent: 'Web version prototype of the game "Minecraft" so I can exercise on ThreeJS.',
                contactLinkTitle: "My links",
                contactFormTitle: "Send me a message",
                contactNameLabel: "Name",
                contactNameInput: "Your name here...",
                contactEmailLabel: "Email",
                contactEmailInput: "Your email here...",
                contactMessageLabel: "Message",
                contactMessageInput: "Your message here...",
                contactFormButton: "Send",
                commentPageTitle: "Want to leave a comment?"
            }
        },
        fr: {
            translation: {
                welcome: "Bienvenue !",
                light: "Thème clair",
                lang: "Langage",
                profile: "Profil",
                tools: "Compétences",
                exp: "Expériences",
                project: "Projets",
                downloadCv: "Télécharger mon CV",
                comment: "Laisser un commentaire",
                commentTitle: "Commentaire",
                profileJob: "Développeur Fullstack",
                profilePresTitle: "Qui suis-je ?",
                profilePresContent: "Je suis un développeur fullstack utilisant principalement React et NodeJS. Je suis polyvalent et je sais m'adapter aux différents besoins techniques qui s'imposent à moi.",
                profilePresContentBis: "Autonome sans pour autant délaisser l'esprit d'équipe, je sais me rendre utile dans tous types d'envrionnements dans le but d'être le plus productif et efficace.",
                profileActivityTitle: "Situation actuelle",
                profileActivityContent: "En possession du titre de Développeur multimédia au RNCP, je suis actuellement ouvert aux nouvelles opportunités.",
                skillMoreToCome: "Plus à venir...",
                experienceSmileTitle: "Stage Développeur Javascript R&D",
                experienceSmileContentOne: "Développement d'une application 3D de visualisation de données (ThreeJS)",
                experienceSmileContentTwo: "Développement d'un Metaverse (ThreeJS)",
                experienceStandardTitle: "Apprenti Développeur Front-end",
                experienceStandardContentOne: "Intégration de pages web (React)",
                experienceStandardContentTwo: "Développement d'un blog côté client et serveur (NextJS)",
                experienceStandardContentThree: "Développement d'un back-office (React, SASS, Tailwind)",
                experienceStandardContentFour: "Méthode Agile",
                experienceHdmTitle: "Stage Développeur Fullstack",
                experienceHdmContentOne: "Intégration de pages web (HTML, CSS, Javascript)",
                experienceHdmContentTwo: "Développement d'une application mobile (React Native, GraphQL, NestJS)",
                experienceHdmContentThree: "Développement d'une page administrateur (TypeScript, React)",
                experienceHdmContentFour: "Méthode Agile",
                projectPageTitle: "Quelques démonstrations",
                projectLearnMore: "Essayez-le !",
                projectArticleContent: "Reprise d'un article web pour apprendre HTML et CSS.",
                projectTodoContent: "Création d'une liste de tâches dans le but de se familiariser avec React.",
                projectDeezerContent: "Site web qui permet de chercher des extraits de musique grâce à l'API de Deezer.",
                projectPokemonContent: "Webapp permettant de consulter tous les Pokémon disponibles et d'en ajouter certains en favoris.",
                projectChatContent: "Chat en direct et en ligne fait avec Firebase.",
                projectMinecraftContent: "Prototype du jeu \"Minecraft\" version web pour m'exercer sur ThreeJS.",
                contactLinkTitle: "Mes liens",
                contactFormTitle: "Envoyez-moi un message",
                contactNameLabel: "Nom",
                contactNameInput: "Votre nom ici...",
                contactEmailLabel: "Email",
                contactEmailInput: "Votre email ici...",
                contactMessageLabel: "Message",
                contactMessageInput: "Votre message ici...",
                contactFormButton: "Envoyer",
                commentPageTitle: "Envie de laisser un commentaire ?"
            }
        }
    }
})