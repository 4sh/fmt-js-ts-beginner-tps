class Pokemon {
    #species;
    #name;

    constructor(species, name) {
        this.#species = species;
        this.#name = name;
    }
}

const pokemonSpecies = ['vulpix', 'ninetales', 'ferrothorn'];

const nickNamesPrefixes = ['cute', 'scary', 'tall', 'small'];

function generateRandomNickname(species) {
    const prefix = nickNamesPrefixes[Math.floor(Math.random() * 4)];

    return prefix + ' ' + species;
}