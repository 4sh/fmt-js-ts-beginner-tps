class PokemonStats {
    #attack;
    #specialAttack;

    #isInvalidStatValue(value) {
        return value === undefined || value <= 0;
    }

    constructor(attack, specialAttack) {
        if (this.#isInvalidStatValue(attack) || this.#isInvalidStatValue(specialAttack)) {
            throw new Error('Attack and special attack should be positive and defined');
        }
        this.#attack = attack;
        this.#specialAttack = specialAttack;
    }
}

