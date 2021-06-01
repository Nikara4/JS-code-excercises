//main elements, parameters
let activeElement = 0;
let timeChange = 4000;

// elements from HTML
const colorImage = document.querySelector("img.color");
const grayImage = document.querySelector("img.gray");
const h1Title = document.querySelector(".member h1");
const h2Title = document.querySelector(".member h2");

//tables with infos for change
const colorImgsTab = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImgsTab = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ["anna baugart", "marek feliksiak", "arek pawłowicz"];
const professions = ["programistka js", "ux & ui designer", "front-end developer"];

//function
function changeSlide() {
  activeElement++;
  if (activeElement == colorImgsTab.length) {
    activeElement = 0;
  }

  colorImage.src = colorImgsTab[activeElement];
  grayImage.src = grayImgsTab[activeElement];
  h1Title.textContent = names[activeElement];
  h2Title.textContent = professions[activeElement];
}

setInterval(changeSlide, timeChange);
