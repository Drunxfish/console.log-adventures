// Monster klasse aanmaken
class Monster {
    static maxHealth = 100;
    static monsters = [];

    // Monster initialisatie
    constructor(name, health) {
        this.name = name;
        this.health = health;
        Monster.monsters.push(this);
    };

    // Static method
    static createMonster(name) {
        // Random getal genereren
        let randomHealth = Math.round(Math.random() * (Monster.maxHealth - 50) + 50);

        // Waarde returneren
        return new Monster(name, randomHealth);
    };

    // Instance method
    attack(target) {
        // Random aanvalsterkte genereren
        let randomAttack = Math.round(Math.random() * (20 - 10) + 10);

        // Health aftrekken
        target.health -= randomAttack;

        // Resultaten weergeven
        console.log(`${this.name} Dealt ${randomAttack} Damage to ${target.name}`);
        console.log(`${target.name}'s remaining HP: ${target.health} \n`);
    };

    // Static method
    static getTotalMonsters() {
        // Lengte van monsters lijst returneren
        return Monster.monsters.length;
    };
};


// Monsters aanmaken
let monster1 = Monster.createMonster("Gojo");
let monster2 = Monster.createMonster("JoJo");
let monster3 = Monster.createMonster("Touka");


// Monster laten elkaar aanvallen
monster1.attack(monster2);
monster2.attack(monster1);
monster3.attack(monster1);
monster1.attack(monster3);

