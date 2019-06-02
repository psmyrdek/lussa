const {dispatchGameAction, getGameState} = require('./services/state.service')

const {actions} = require('./services/actions');

const subscribedActions = [
    actions.addPlayer,
    actions.markReadiness,
    actions.colorTakenFromSupplier
]

module.exports.initWs = server => {
    io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('Client connected');

        subscribedActions.forEach(actionType => {

            socket.on(actionType, ({gameId, action}) => {
                socket.join(gameId);
                dispatchGameAction(gameId, action);
                io.in(gameId).emit(actions.updateGameState, getGameState(gameId));
            });

        })

    })
}