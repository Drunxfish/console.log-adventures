// Klas aanmaken
class Monster {
    // Initialisatie
    constructor(name, hp, attackPower, defense) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
        this.defense = defense;
    };

    // Een method waarbij monster doelwit kan aanvalen
    attack(target) {
        let damage;

        // Damage bepalen
        if (this.attackPower > target.defense) {
            damage = this.attackPower - target.defense;
        } else {
            damage = 0;
        };

        // Enemy aanvallen
        target.take_damage(damage);
    };

    // Trekt leven af
    take_damage(damage) {
        this.hp -= damage;
    };
};

// Sub-klas Dragon (eerste inheritance)
class Dragon extends Monster {
    constructor(name, hp, attackPower, defense, fireball) {
        // parent klasse eigenschappen overnemen
        super(name, hp, attackPower, defense);

        this.fireball = fireball;
    };
};

// Sub-klas Goblin
class Goblin extends Monster {
    constructor(name, hp, attackPower, defense, shadowstep) {
        // parent klasse eigenschappen overnemen
        super(name, hp, attackPower, defense);

        this.shadowstep = shadowstep;
    };
};

//  Dragon
let draco = new Dragon("Draco", 100, 20, 10, 25);

// Goblin
let sneaky = new Goblin("Sneaky", 50, 15, 5, 25);

// Draco valt aan sneaky
draco.attack(sneaky); 
sneaky.attack(draco);

// Nieuwe stats weergeven
console.log(`${draco.name} heeft nog ${draco.hp} hp over.`);
console.log(`${sneaky.name} heeft nog ${sneaky.hp} hp over.`);