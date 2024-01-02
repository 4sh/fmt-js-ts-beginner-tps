const vulpix = {
    species: 'vulpix',
    nickname: 'Lil fox',
    stats: {
        'attack:':41,
        'special attack': 50
    },

    // Rename using keyword `function` to define the function
    rename1: function(newNickname) {
        this.nickname = newNickname;
    },

    // Rename using an arrow function
    rename2: (newNickname) => {
        this.nickname = newNickname;
    }
}

console.log(vulpix);
console.log(vulpix.nickname);
console.log(vulpix.stats["special attack"]);

vulpix.level = 5

console.log(vulpix);
vulpix.rename1('Cute lil fox');
console.log(vulpix.nickname)

vulpix.rename2('Lil arrow fox');
console.log(vulpix.nickname)

Object.freeze(vulpix);
vulpix.nickname = 'new nickname';
vulpix.stats["special attack"] = 12;

console.log(vulpix.nickname);
console.log(vulpix.stats["special attack"]);