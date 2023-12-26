/**
 * @param pokemonId Can be either pokemon id or pokemon name
 * @returns {string} URL to get Pokemon from PokeApi
 */
function buildPokeApiUrl(pokemonId) {
    return 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;
}

async function getPokemon(id) {
    const pokemonUrl = buildPokeApiUrl(id);

    const response = await fetch(pokemonUrl);

    if (response.status === 404) {
        throw new Error('Pokemon was not found')
    }

    return response.json();
}

getPokemon(598).then(console.log);
getPokemon(4318431).catch(console.log);
