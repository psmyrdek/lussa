module.exports.state = () => Object.assign({}, {
    gameId: '',
    gameStarted: false,
    gameEnded: false,
    suppliers: [],
    colors: [],
    rejectedSupplierColors: [],
    brokenColors: [],
    bonusColors: [],
    players: [],
    roundNo: 0,
    playerTurnIndex: 0,
    firstPlayerId: null
})