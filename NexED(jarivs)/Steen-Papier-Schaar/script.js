// varaibeles
let mess = document.querySelector("#mess");
let scr = document.querySelector("#score");
let eenkeuze;
let tweekeuze;
let winnar;
let ishet = false;
let ishettweede = false;
let scoreP1 = 0;
let scoreP2 = 0;

// spelers/keuzen
function keuze(speler, element) {
    // Speler: 1
    if (ishet === false) {
        if (speler === "speler1") {
            eenkeuze = element;
            mess.textContent = "Speler 2 kies je optie!";
            ishet = true;
        }
    }
    
    // Speler: 2
    if (ishettweede === false) {
        if (speler === "speler2") {
            mess.textContent = "Speler 1 kies je optie!";
            tweekeuze = element;
            ishettweede = true;
        }
    }

    // zij allebij opties geset ?
    if (ishet && ishettweede) {
        result();
    }
}

// resultaat berekenen
function result() {
    if (eenkeuze === tweekeuze) {
        winnar = "geen";
    } else if (eenkeuze === "papier" && tweekeuze === "steen") {
        winnar = "Speler 1";
        scoreP1++;
    } else if (eenkeuze === "schaar" && tweekeuze === "papier") {
        winnar = "Speler 1";
        scoreP1++;
    } else if (eenkeuze === "steen" && tweekeuze === "schaar") {
        winnar = "Speler 1";
        scoreP1++;
    } else {
        winnar = "Speler 2";
        scoreP2++;
        ishettweede = false;
        ishet = false;
        eenkeuze = 1;
        tweekeuze = 1;
    }

    // gelijkspel
    if (winnar === "geen") {
        mess.textContent = "Het is een gelijkspel!";
        ishet = false;
        ishettweede = false;
        // anders ..
    } else {
        mess.textContent = `${winnar} heeft gewonnen!`;
        scr.textContent = `Score: ${scoreP1} - ${scoreP2}`;
        ishettweede = false;
        ishet = false;
        // titel verversen
        setTimeout(() => {
            mess.textContent = "Kies maar :O";
        }, 2300);
    }
}