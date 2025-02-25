// Geluiden opslaan in een object
let eersteEffect = new Audio("./birds.mp3");
let tweedeEffect = new Audio("./nature.mp3");


// Per klik geluiden afspelen
document.querySelector("div.eerste").addEventListener("click", function () {
    eersteEffect.play();
});
document.querySelector("div.tweede").addEventListener("click", function () {
    tweedeEffect.play();
});