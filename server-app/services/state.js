module.exports.state = () => Object.assign({}, {
    gameId: '',
    gameStarted: false,
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