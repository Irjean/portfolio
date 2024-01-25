const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const tutoVideo = document.querySelector(".tuto-video");
const tutoTitle = document.querySelector(".tuto-title");
const payButton = document.querySelector(".pay-button");
const articlePay = document.querySelector(".article-pay");
const shadow = document.querySelector(".shadow");
const menuBurger = document.querySelector(".menu-burger");
const cross = document.querySelector(".cross");
const mobileNav = document.querySelector(".mobile-nav");
const videos = [{
    source : "https://www.youtube.com/embed/YEbtvKPvTYE",
    title : "More DevTool Tips in the new Totally Tooling Tips s03e07"
}, {
    source : "https://www.youtube.com/embed/pBJZsp5LsOE",
    title : "Accessibility Tooling covered in the new Totally Tooling Tips s03e08"
}, {
    source : "https://www.youtube.com/embed/wFwogd4CdwY",
    title : "Key Moments In Web Page Loading in the new Totally Tooling Tips s03e09"
}];

leftArrow.addEventListener("click", () => {
    scrollVideos(-1);
});

rightArrow.addEventListener("click", () => {
    scrollVideos(1);
})

function scrollVideos(num){
    for(let i = 0; i < videos.length; i++){
        if(videos[i].source === tutoVideo.src){
            if(num === 1 && videos[i+1] == undefined){
                tutoVideo.src = videos[0].source;
                tutoTitle.innerHTML = videos[0].title;
                return; 
            }
            if(num === -1 && videos[i-1] == undefined){
                tutoVideo.src = videos[videos.length-1].source;
                tutoTitle.innerHTML = videos[videos.length-1].title;
                return; 
            }
            tutoVideo.src = videos[i+num].source;
            tutoTitle.innerHTML = videos[i+num].title;
            return;
        }
    }
}

payButton.addEventListener("click", () => {
    articlePay.style.height = "inherit";
    shadow.style.display = "none";
});

menuBurger.addEventListener("click", () => {
    mobileNav.classList.add("show-nav");
});

cross.addEventListener("click", () => {
    mobileNav.classList.remove("show-nav");
});