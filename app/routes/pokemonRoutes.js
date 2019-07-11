const router = require('express').Router();
const pokemonHandler = require('./../controllers/pokemonController')

router.post('/most-powerful-pokemon', pokemonHandler.mostPowerfulPokemon);

module.exports = router;