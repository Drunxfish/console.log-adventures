// Display and buttons
let display = document.getElementById('display');
let knopjes = Array.from(document.getElementsByClassName('button'));


// Iterates on buttons and adds even listeners to each and every button
knopjes.forEach(element => {
    element.addEventListener('click', (e) => {
        // Switch case to handle events
        switch (e.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    alert("Invalid Calculation.");
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
});