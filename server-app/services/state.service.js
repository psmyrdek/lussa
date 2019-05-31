const {defaultColors} = require('../utils/default-colors');
const {generatePlayer} = require('../utils/generate-player');
const uuidv4 = require('uuid/v4');

const state = {}

const initGameState = () => ({
    isGameCreated: true,
    playerId: '',
    suppliers: [],
    colors: defaultColors,
    playerTurnColors: [],
    rejectedSupplierColors: [],
    brokenColors: [],
    bonusColors: [],
    players: [],
    roundNo: 1
})

const addPlayer = (gameId, playerId) => {
    const game = state[gameId];
    game.players.push(generatePlayer(playerId))
    
    return game;
}

module.exports.initGame = () => {
    const gameId = uuidv4();
    state[gameId] = initGameState();
    return {gameId};
}

module.exports.join = (gameId) => {

    const playerId = uuidv4();

    if (!state[gameId]) {
        throw new Error(`Game ${gameId} does not exist!`);
    }

    addPlayer(gameId, playerId)

    return Object.assign({}, state[gameId], { playerId });
}