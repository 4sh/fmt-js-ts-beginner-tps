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