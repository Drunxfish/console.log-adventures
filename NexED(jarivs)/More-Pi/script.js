// dynamisch update
setInterval(() => {
    // klok
    let klok = new Date();
    let uur = klok.getHours();
    let minuten = klok.getMinutes();
    if (minuten < 10) {
        minuten = '0' + minuten;
    }

    // seconden
    let seconden = klok.getSeconds();
    if (seconden < 10) {
        seconden = '0' + seconden;
    }

    document.querySelector("#tijd").textContent = "Het is: " + uur + ':' + minuten + ':' + seconden;

}, 1000);
function berekenen() {
    const pi = 3.14;
    let dia = document.querySelector("#num").value;
    let omtrek = document.querySelector("#omtrek");
    let oppervlakte = document.querySelector("#oppervlakte");

    omtrek.textContent = "Omtrek: " + dia * pi;
    oppervlakte.textContent = "Oppervlakte: " + (dia * dia * pi * 0.25).toFixed(2);
}
