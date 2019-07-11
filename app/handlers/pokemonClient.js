const Pokedex = require('pokedex-promise-v2');
const options = {
    cacheLimit: 3600 * 1000, // 3600s 1hr
    timeout: 5 * 1000 // 5s
}
const p = new Pokedex(options);

function fetchPokemansByName(names) {
    return new Promise((resolve, reject) => {
        p.getPokemonByName(names)
            .then(response => {
                let listOfAllResponse = response.map(response => {
                    return {
                        "name": response.name,
                        "moves": response.moves.length,
                    }
                });
                resolve(listOfAllResponse);
            })
            .catch(error => {
                console.log('There was an ERROR: ', error);
                reject(error);
            });;
    });
}

module.exports.fetchPokemansByName = fetchPokemansByName