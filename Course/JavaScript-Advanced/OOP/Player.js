// Klas aanmaken
class Player {
    // Klasse initialisatie 
    constructor(name, level) {
        this.name = name;
        this.level = level;
        // standard eigenschappen
        this.lives = 3;
        this.points = 0;
        this.coins = 0;

    };

    // Punten verhogen
    increasePoints(aantal) {
        this.points += aantal;
    };

    // leven wegnemen
    loselife() {
        // Controleren of de speler nog kan spelen ander Game Over
        if (this.lives > 0) {
            this.lives -= 1;
        } else {
            console.log("Game Over");
        };
    };
};

// Nieuwe object aanmaken van Player klasse
let bloodElf = new Player("Malenia", 14);

// Eigenschappen uitprinten
console.log(bloodElf.name, bloodElf.level, bloodElf.points);


