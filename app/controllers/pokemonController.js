const pokemonClient = require('../handlers/pokemonClient');
const pokemonService = require('./../service/pokemonService');

function mostPowerfulPokemon(req, res, next) {
    let names = req.body.pokemonNames;
    pokemonClient.fetchPokemansByName(names)
        .then((response) => {
            res.json(pokemonService.getPokemonWithMostMoves(response));
        })
        .catch((err) => {
            res.json("Please re-confirm the names of your pokemon!");
        })
}

module.exports.mostPowerfulPokemon = mostPowerfulPokemon
