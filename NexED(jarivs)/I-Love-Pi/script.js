function berekenen() {
    const pi = 3.14;
    let num = document.querySelector("#num").value;
    let mess = document.querySelector("#mess");
    let result = parseFloat(pi * num);
    if (num > 0) {
        mess.textContent = `De omtrek van de cirkel is: ${result}`;
    } else {
        mess.textContent = "Berekening op nul is onmogelijk!";
    }
}