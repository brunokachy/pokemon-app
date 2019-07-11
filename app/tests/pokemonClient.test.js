const pokemonClient = require("../handlers/pokemonClient")
const chai = require("chai");
const expect = chai.expect;

describe('Fetch Pokemans By Name', function () {
    it('Should return result size as the same as the number of pokenames', () => {
        const pokemonNames = ['bulbasaur', 'ditto', 'machop', 'eevee'];
        return pokemonClient.fetchPokemansByName(pokemonNames).then(function (data) {
            expect(data).to.have.lengthOf(4);
        });
    });
});