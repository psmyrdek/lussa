const apiRouter = require('express').Router()

module.exports.createApiRouter = (stateService) => {

    apiRouter.post('/api/game', (req, res) => {
        return res.json(stateService.initGame())
    })

    apiRouter.post('/api/game/:gameId/join', ({params: { gameId }}, res) => {
        return res.json(stateService.join(gameId))
    })
    
    return apiRouter;

};