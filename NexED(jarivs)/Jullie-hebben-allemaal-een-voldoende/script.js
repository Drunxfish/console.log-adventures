const testQuestions = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel poten heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Wat is een Duits automerk?",
    "Noem een Waddeneiland",
];

let par = document.querySelectorAll("p");
for (let i = 0; i < testQuestions.length; i++) {
    par[i].innerHTML = testQuestions[i];
}

function check() {
    let count = 0;
    let mess = document.querySelector("#mess");

    const correctAnswers = [
        "Parijs",
        8,
        "IJsselmeer",
        ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes"],
        ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
    ];

    const een = document.querySelector("#eerste");
    const twee = document.querySelector("#tweede");
    const drie = document.querySelector("#derde");
    const vier = document.querySelector("#vierde");
    const vijf = document.querySelector("#vijfde");

    const eerste = document.querySelector("#eerste").value;
    const tweede = document.querySelector("#tweede").value;
    const derde = document.querySelector("#derde").value;
    const vierde = document.querySelector("#vierde").value;
    const vijfde = document.querySelector("#vijfde").value;


    // #1
    if (correctAnswers.includes(eerste)) {
        een.classList.remove("fout");
        een.classList.add("goed");
        count++;
    } else {
        een.classList.remove("goed");
        een.classList.add("fout");
    }

    // #2
    if (correctAnswers.includes(parseInt(tweede))) {
        twee.classList.remove("fout");
        twee.classList.add("goed");
        count++;
    } else {
        twee.classList.remove("goed");
        twee.classList.add("fout");
    }

    // #3
    if (correctAnswers.includes(derde)) {
        drie.classList.remove("fout");
        drie.classList.add("goed");
        count++;
    } else {
        drie.classList.remove("goed");
        drie.classList.add("fout");
    }

    // #4
    if (correctAnswers[3].includes(vierde)) {
        vier.classList.remove("fout");
        vier.classList.add("goed");
        count++;
    } else {
        vier.classList.remove("goed");
        vier.classList.add("fout");
    }

    // #5
    if (correctAnswers[4].includes(vijfde)) {
        vijf.classList.remove("fout");
        vijf.classList.add("goed");
        count++;
    } else {
        vijf.classList.remove("goed");
        vijf.classList.add("fout");
    }

    mess.innerHTML = `Je hebt ${count}/5 punten gescoord`;
}