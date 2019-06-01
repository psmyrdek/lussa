const { defaultColors } = require('../utils/default-colors');
const { generatePlayer } = require('../utils/generate-player');
const { getBonusColors } = require('../utils/get-bonus-colors');
const { createSuppliers } = require('../utils/create-suppliers')
const uuidv4 = require('uuid/v4');

const state = {}

module.exports.initGame = () => {
    const gameId = uuidv4();

    const [bonusColors, remainingColors] = getBonusColors(defaultColors);

    const gameState = {
        isGameLoaded: true,
        gameId: gameId,
        playerId: '',
        suppliers: [],
        colors: remainingColors,
        playerTurnColors: [],
        rejectedSupplierColors: [],
        brokenColors: [],
        bonusColors,
        players: [],
        roundNo: 0
    }

    state[gameId] = gameState;
    return { gameId };
}

module.exports.join = (gameId) => {
    const playerId = uuidv4();

    if (!state[gameId]) {
        throw new Error(`Game ${gameId} does not exist!`);
    }

    if (state[gameId].players.length >= 4) {
        throw new Error(`Players limit (4) for game ${gameId} reached`);
    }

    const game = state[gameId];
    game.players.push(generatePlayer(playerId))
    game.suppliers = createSuppliers(game.players.length);

    return Object.assign({}, state[gameId], { playerId });
}

module.exports.getGameState = gameId => {

    if (!state[gameId]) {
        throw new Error(`Game ${gameId} does not exist!`);
    }

    return state[gameId];

}

module.exports.markPlayerReadiness = (gameId, playerId) => {

    if (!state[gameId]) {
        throw new Error(`Game ${gameId} does not exist!`);
    }

    const game = state[gameId];

    const player = game.players.find(x => x.id === playerId);
    player.isReady = true;

}