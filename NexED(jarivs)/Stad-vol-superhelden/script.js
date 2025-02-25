const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// aanvrag 
function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    };
}

// extra
function sendRequest() {
    requestJSON(requestUrl);
}

// data verdeling
function processResponse(response) {
    let prs = JSON.parse(response);
    document.querySelector("#squadName").innerHTML = prs.squadName;
    document.querySelector("#homeTown").innerHTML = prs.homeTown;
    document.querySelector("#formed").innerHTML = prs.formed;
    document.querySelector("#secretBase").innerHTML = prs.secretBase;
    document.querySelector("#active").innerHTML = prs.active;
    let tableID = document.querySelector("#member-table");


    // data weergave
    function voegKarakters(person, amount, slot) {
        // nieuwe rij
        person = tableID.insertRow(-1);
        // cellen: naam/age/secretIdentity/powers
        for (let i = 0; i < amount; i++) {
            let data = person.insertCell(i);
            if (i === 0) {
                data[slot] = document.createTextNode(prs.members[slot].name);
                data.appendChild(data[slot]);
            } else if (i === 1) {
                data[slot] = document.createTextNode(prs.members[slot].age);
                data.appendChild(data[slot]);
            } else if (i === 2) {
                data[slot] = document.createTextNode(prs.members[slot].secretIdentity);
                data.appendChild(data[slot]);
            } else if (i === 3) {
                data[slot] = document.createTextNode(prs.members[slot].powers);
                data.appendChild(data[slot]);
            }
        }
    }
    // data aanvullen
    voegKarakters("derde", 4, 2);
    voegKarakters("tweede", 4, 1);
    voegKarakters("eerste", 4, 0);
}


sendRequest();
