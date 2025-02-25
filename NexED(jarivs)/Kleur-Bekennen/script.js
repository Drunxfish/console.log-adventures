function achtergrond() {
    // elementen opslaan op een variabel
    let bd = document.body;
    let cl = document.querySelector("#colors").value;

    // achtergrond kleur veranderen
    bd.style.backgroundColor = cl;
};

function titels() {
    // elementen opslaan op een variabel
    let cl = document.querySelector("#colors").value;
    let titels = document.querySelectorAll("h1");

    // elke node aanpassen
    for (let i = 0; i < titels.length; i++) {
        titels[i].style.color = cl;
    }
};

function beide() {
    // elementen opslaan op een variabel
    let cl = document.querySelector("#colors").value;
    let bd = document.body;
    let titels = document.querySelectorAll("h1");

    // elke node aanpassen
    for (let i = 0; i < titels.length; i++) {
        titels[i].style.color = cl;
    }

    // achtergrond kleur veranderen
    bd.style.backgroundColor = cl;

}