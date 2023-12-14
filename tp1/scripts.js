function isInvalidStatValue(value) {
    return value === undefined || value <= 0;
}

class PokemonStats {
    #attack;
    #specialAttack;

    constructor(attack, specialAttack) {
        if (isInvalidStatValue(attack) || isInvalidStatValue(specialAttack)) {
            throw new Error('Attack and special attack should be positive and defined');
        }
        this.#attack = attack;
        this.#specialAttack = specialAttack;
    }
}

// Commented examples of PokemonStats instantiation that would throw exceptions:
// the exception will be thrown when any of the parameters is missing but also if a negative or null value
// is given to the constructor

// new PokemonStats();
// new PokemonStats(-1);
// new PokemonStats(34, '');