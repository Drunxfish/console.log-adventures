// achtergrond
function achtergrond() {
    // elementen opslaan op een variabel
    let bd = document.body;
    let cl = document.querySelector("#colors").value;

    // achtergrond kleur veranderen
    bd.style.backgroundColor = cl;
}

// titels
function titels() {
    // elementen opslaan op een variabel
    let cl = document.querySelector("#colors").value;
    let titelsx = document.querySelectorAll("h1");

    // elke node aanpassen
    for (let i = 0; i < titelsx.length; i++) {
        titelsx[i].style.color = cl;
    }
}

// beides
function beide() {
    // elementen opslaan op een variabel
    let cl = document.querySelector("#colors").value;
    let bd = document.body;
    let titelsa = document.querySelectorAll("h1");

    // elke node aanpassen
    for (let j = 0; j < titelsa.length; j++) {
        titelsa[j].style.color = cl;
    }

    // achtergrond kleur veranderen
    bd.style.backgroundColor = cl;
}
