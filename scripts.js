/**
 * @param pokemonId Can be either pokemon id or pokemon name
 * @returns {string} URL to get Pokemon from PokeApi
 */
function buildPokeApiUrl(pokemonId) {
    return 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;
}

function getPokemon(id) {
    const pokemonUrl = buildPokeApiUrl(id);


}

getPokemon(598);
getPokemon(4318431);
