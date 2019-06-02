// const uuidv4 = require('uuid/v4');

const uuidv4 = require('uuid/v4');

const {actions} = require('./actions');
const {createStore} = require('./store');
const store = createStore();

module.exports.createGame = () => {

    const gameId = uuidv4()

    const initGameAction = {
        type: actions.initGame,
        payload: gameId
    }

    store.dispatchGlobalAction(initGameAction);

    return { gameId };
}

module.exports.dispatchGameAction = (gameId, action) => {
    store.dispatchGameAction(gameId, action);
}

module.exports.getGameState = (gameId) => store.getGameState(gameId);

// function startNewRound(game) {
//     game.roundNo++;

//     let availableColors = game.colors

//     const filledSuppliers = game.suppliers.map(supplier => {
//         const [toGet, toKeep] = getSupplierColors(availableColors);
//         availableColors = toKeep
//         return { ...supplier, colors: toGet }
//     })

//     game.colors = availableColors;
//     game.suppliers = filledSuppliers;

// }

// module.exports.initGame = () => {
//     const gameId = uuidv4();

//     const [bonusColors, remainingColors] = getBonusColors(defaultColors);

//     const gameState = {
//         isGameLoaded: true,
//         gameId: gameId,
//         playerId: '',
//         suppliers: [],
//         colors: remainingColors,
//         playerTurnColors: [],
//         rejectedSupplierColors: [],
//         brokenColors: [],
//         bonusColors,
//         players: [],
//         roundNo: 0,
//         playerTurnIndex: 0
//     }

//     state[gameId] = gameState;
//     return { gameId };
// }

// module.exports.join = (gameId) => {
//     const playerId = uuidv4();

//     if (!state[gameId]) {
//         throw new Error(`Game ${gameId} does not exist!`);
//     }

//     if (state[gameId].players.length >= 4) {
//         throw new Error(`Players limit (4) for game ${gameId} reached`);
//     }

//     const game = state[gameId];
//     game.players.push(generatePlayer(playerId))
//     game.suppliers = createSuppliers(game.players.length);

//     return Object.assign({}, state[gameId], { playerId });
// }

// module.exports.getGameState = gameId => {

//     if (!state[gameId]) {
//         throw new Error(`Game ${gameId} does not exist!`);
//     }

//     return state[gameId];

// }

// module.exports.markPlayerReadiness = (gameId, playerId) => {

//     if (!state[gameId]) {
//         throw new Error(`Game ${gameId} does not exist!`);
//     }

//     const game = state[gameId];

//     const player = game.players.find(x => x.id === playerId);
//     player.isReady = true;
// }

// module.exports.tryStartGame = (gameId) => {

//     const game = state[gameId];

//     if (game.players.every(player => player.isReady)) {
//         startNewRound(game);
//         return true;
//     }

//     return false;
// }

// module.exports.updatePlayerState = (gameId, playerActionUpdate) => {

//     if (!state[gameId]) {
//         throw new Error(`Game ${gameId} does not exist!`);
//     }

//     const game = state[gameId];

//     const playerIndex = game.players.findIndex(x => x.id === playerActionUpdate.player.id);
    
//     game.players[playerIndex] = playerActionUpdate.player;
//     game.suppliers = playerActionUpdate.suppliers;
//     game.rejectedSupplierColors = playerActionUpdate.rejectedSupplierColors;
//     game.brokenColors = playerActionUpdate.brokenColors;
//     game.playerTurnIndex = ++game.playerTurnIndex % game.players.length;

// }




