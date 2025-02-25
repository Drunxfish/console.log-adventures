// Oefen
document.querySelector("div.eerste").addEventListener("click", function (e) {
    console.log(e);
});


// Traceert muis positie
function divToonPositie(e) {
    document.querySelector("div#a1").textContent = e.clientX;
    document.querySelector("div#a2").textContent = e.clientY;
    document.querySelector("div#a3").textContent = e.offsetX;
    document.querySelector("div#a4").textContent = e.offsetY;
    document.querySelector("div#a5").textContent = e.pageX;
    document.querySelector("div#a6").textContent = e.pageY;
    document.querySelector("div#a7").textContent = e.screenX;
    document.querySelector("div#a8").textContent = e.screenY;
};


// Op hover nieuwe coords bijwerken
document.querySelector("div.tweede").addEventListener("mousemove", divToonPositie);

//  Haal cords weg
function leegStats(e) {
    let inhoudArray = document.querySelectorAll("div.inhoud");

    for (i = 0; i < inhoudArray.length; i++) {
        inhoudArray[i].textContent = "";
    };
};

// Cords weg halen
document.querySelector("div.tweede").addEventListener("mouseout", leegStats);