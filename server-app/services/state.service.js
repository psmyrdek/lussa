const {defaultColors} = require('../utils/default-colors');
const {generatePlayer} = require('../utils/generate-player');
const {getBonusColors} = require('../utils/get-bonus-colors');
const {createSuppliers} = require('../utils/create-suppliers')
const uuidv4 = require('uuid/v4');

const state = {}

const initGameState = () => {

    const [bonusColors, remainingColors] = getBonusColors(defaultColors);

    const gameState = {
        isGameCreated: true,
        playerId: '',
        suppliers: [],
        colors: remainingColors,
        playerTurnColors: [],
        rejectedSupplierColors: [],
        brokenColors: [],
        bonusColors,
        players: [],
        roundNo: 1
    }

    return gameState
}

const addPlayer = (gameId, playerId) => {
    const game = state[gameId];
    game.players.push(generatePlayer(playerId))

    game.suppliers = createSuppliers(game.players.length);
    
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

    if (state[gameId].players.length >= 4) {
        throw new Error(`Players limit (4) for game ${gameId} reached`);
    }

    addPlayer(gameId, playerId)

    return Object.assign({}, state[gameId], { playerId });
}