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

Promise.all([p1, p2]).then(values => console.log('Total height: ' + (values[0].height + values[1].height))); // Displays: 16 
Promise.any([p3, p1]).then(value => console.log('any name: ' + value.name)); // Displays: ninetales
Promise.race([p1, p2]).then(value => console.log('race name: ' + value.name)); // Dipslays: race name: poochyena

