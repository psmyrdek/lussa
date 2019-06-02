const apiRouter = require('express').Router()

module.exports.createApiRouter = (stateService) => {

    apiRouter.post('/api/game', (req, res) => {
        return res.json(stateService.createGame())
    })

    apiRouter.get('/api/game/:gameId', (req, res) => {
        return res.json(stateService.getGameState(req.params.gameId))
    })

    return apiRouter;

};