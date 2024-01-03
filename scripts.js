import {
    generateRandomNickname,
    Pokemon,
    pokemonSpecies
} from "./folder/otherFolder/anotherFolder/deepFolder/pokemon.js";

const myPokemons = pokemonSpecies.map(species => new Pokemon(species, generateRandomNickname(species)));

console.log(myPokemons);