
function getPokemonWithMostMoves(listOfPokemons){
   return listOfPokemons.reduce((accumulator, currentValue) => {
        return (accumulator.moves || 0) > currentValue.moves ? accumulator : currentValue
    }, {});
}
module.exports.getPokemonWithMostMoves = getPokemonWithMostMoves



