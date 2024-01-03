import {
    generateRandomNickname,
    Pokemon,
    pokemonSpecies as trainerPokemonSpecies
} from "./folder/otherFolder/anotherFolder/deepFolder/pokemon.js";

const myPokemons = trainerPokemonSpecies.map(species => new Pokemon(species, generateRandomNickname(species)));

console.log(myPokemons);