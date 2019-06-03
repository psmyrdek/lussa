const {dispatchGameAction, getGameState} = require('./services/state.service')

const {actions} = require('./services/actions');

const unwrap = (gameAction) => {
    const action = gameAction.action;
    action.payload = Object.assign({}, {
        gameId: gameAction.gameId,
        playerId: gameAction.playerId
    }, (gameAction.action.payload || {}))

    return action;
};

const actionHandler = (gameAction) => {
    const action = unwrap(gameAction)
    dispatchGameAction(gameAction.gameId, action);
    io.in(gameAction.gameId).emit(actions.updateGameState, getGameState(gameAction.gameId));
}

module.exports.initWs = server => {
    io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('Client connected');

        socket.on(actions.addPlayer, (gameAction) => {
            socket.join(gameAction.gameId);
        });
        
        socket.on(actions.addPlayer, actionHandler);
        socket.on(actions.markReadiness, actionHandler);
        socket.on(actions.takeFromSupplier, actionHandler);
        socket.on(actions.fillColumn, actionHandler);

    })
}