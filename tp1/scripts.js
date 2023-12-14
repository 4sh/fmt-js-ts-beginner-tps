class PokemonStats {
    #attack;
    #specialAttack;
    
    static #isInvalidStatValue(value) {
        return value === undefined || value <= 0;
    }

    constructor(attack, specialAttack) {
        if (PokemonStats.#isInvalidStatValue(attack) || PokemonStats.#isInvalidStatValue(specialAttack)) {
            throw new Error('Attack and special attack should be positive and defined');
        }
        this.#attack = attack;
        this.#specialAttack = specialAttack;
    }
}