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
    
    if (id % 2 === 0) {
        return await new Promise(resolve => setTimeout(() => resolve(response.json()), 2000));
    }
    
    return response.json();
}

const p1 = getPokemon(38);
const p2 = getPokemon(261);
const p3 = getPokemon(1303);