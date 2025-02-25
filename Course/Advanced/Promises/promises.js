// Event handler
function handleClick() {
    // Nieuw promise object met resolve/regejct callbacks
    let dobbelsteenPromise = new Promise((resultaat, fout) => {
        // Willekeurig getal tussen 1 tot en met 6 (1&6 inclusief) genereren
        let aantalOgen = Math.floor(Math.random() * 6) + 1;

        // Is het gevuld?
        if (aantalOgen) {
            // Als het promise 'resolved' is
            resultaat(aantalOgen);
        } else {
            // Als het promise 'rejected' is
            fout("Fout bij het gooien van de dobbelsteen.");
        };
    });

    // Methods uitvoeren op dobbelsteenPromise object
    dobbelsteenPromise
        // Als het 'fulfilled' is
        .then((waarde) => { document.querySelector("#resultaat").innerHTML = `Je hebt een ${waarde} gegooid!` })
        // Als het 'rejected is 
        .catch((fout) => { document.querySelector("#resultaat").innerHTML = fout });
};

// Functie uitvoeren op een click
document.querySelector("#rolDobbelsteen").addEventListener("click", handleClick);




