const pokemonService = require("../service/pokemonService")
const chai = require("chai");
const expect = chai.expect;

describe('Most Powerful Pokemon Test - Pokemon With Most Moves', () => {
    it('should return most powerful pokemon', () => {
        const expectedRes = {
            "name": "machop",
            "moves": 94
        };
        const req = [{ name: 'bulbasaur', moves: 78 },
        { name: 'ditto', moves: 1 },
        { name: 'machop', moves: 94 },
        { name: 'eevee', moves: 64 }];

        let res = pokemonService.getPokemonWithMostMoves(req);
        expect(res).to.eql(expectedRes);
    });
});

