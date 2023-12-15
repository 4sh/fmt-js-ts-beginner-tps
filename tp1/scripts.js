// Ce fichier est rempli de sauts de lignes pour que les apprenantes et apprenants ne lisent pas le code,
// qui pourrait leur permettre de deviner certaines réponses.


























































const pokemonIds = [
    466,
    251,
    669,
    444,
    386,
    69,
    265,
    16,
    509,
    629,
    598,
    338,
    38,
    645,
    627,
    521,
    204,
    500,
    195,
    532,
    465,
    290,
    490,
    574,
    299,
    455,
    161,
    259,
    391,
    557,
    535,
    597,
    369,
    1032,
    661,
    506,
    649,
    149,
    38,
    37,
    656,
    224,
    598,
    570,
    58,
    1039,
]

pokemonIds.forEach(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then());