function check() {
    // antwoorden
    const antwoorden = ["parijs", 8, "IJsselmeer"];


    // elementen opslaan op een var
    const eerste = document.querySelector("#eerste").value;
    const tweede = document.querySelector("#tweede").value;
    const derde = document.querySelector("#derde").value;

    const een = document.querySelector("#eerste");
    const twee = document.querySelector("#tweede");
    const drie = document.querySelector("#derde");

    // bericht
    let mess = document.querySelector("#mess");
    // fouten teller
    let count = 0;


    // controleren als input gelijk is aan ons antwoorden van van array
    // en klassen geven afhankelijk van het antwoord: goed = 'goed' else ...
    if (eerste.toLowerCase() === antwoorden[0]) {
        een.classList.remove("fout");
        een.classList.add("goed");
    } else {
        een.classList.remove("goed");
        een.classList.add("fout");
        count++;
    }

    // #2
    if (parseInt(tweede) === antwoorden[1]) {
        twee.classList.remove("fout");
        twee.classList.add("goed");
    } else {
        twee.classList.remove("goed");
        twee.classList.add("fout");
        count++;
    }

    // #3
    if (derde === antwoorden[2]) {
        drie.classList.remove("fout");
        drie.classList.add("goed");
    } else {
        drie.classList.remove("goed");
        drie.classList.add("fout");
        count++;
    }

    // hoeveel fouten ? of geen ?
    if (count === 1) {
        mess.innerHTML = "Er is een fout! <hr>";
    } else if (count > 1) {
        mess.innerHTML = "Er zijn meerdere fouten!<hr>";
    } else {
        mess.innerHTML = "Alle antwoorden zijn goed! <hr>";
    }
}