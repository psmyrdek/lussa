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


