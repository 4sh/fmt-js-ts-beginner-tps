
async function loadPokemons() {
    return await fetch("/data/pokemons.json").then(resp => resp.json())
}

function showPokemon(predicate) {
  const pokemon = POKEMONS.find(predicate);
  if(!pokemon) {
    console.log(`No pokemon found matching predicate ${predicate.toString()}`)
    return;
  }

  let text = `[${pokemon.id}] ${pokemon.name}
    ${pokemon.stats.map(st => `${st.stat.name}:${st.base_stat}`).join(", ")}
    Types: ${pokemon.types.map(t => t.type.name).join(", ")}
    Abilities: ${pokemon.abilities.map(ab => ab.ability.name).join(", ")}
  `
  document.querySelector("#result").innerHTML = text
}

function findPokemonById() {
  const id = document.querySelector("input")?.value;
  showPokemon(pokemon => pokemon.id === id);
}
function findPokemonByName() {
  const name = document.querySelector("input")?.value;
  showPokemon(pokemon => pokemon.name.toLowerCase() === name?.toLowerCase());
}

let POKEMONS = [];
async function main() {
  POKEMONS = await loadPokemons();
  console.log(`All ${POKEMONS.length} pokemons loaded successfully !`)

  document.querySelector("#showPokemonById").addEventListener('click', findPokemonById);
  document.querySelector("#showPokemonByName").addEventListener('click', findPokemonByName);
  console.log("Button events initiated !")
}

main();
