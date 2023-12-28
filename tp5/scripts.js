import {
    generateRandomNickname,
    Pokemon,
    pokemonSpecies as trainerPokemonSpecies
} from "pokemon";

const myPokemons = trainerPokemonSpecies.map(species => new Pokemon(species, generateRandomNickname(species)));

console.log(myPokemons);