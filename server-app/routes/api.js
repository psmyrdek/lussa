const apiRouter = require('express').Router()

module.exports.createApiRouter = (stateService) => {

    apiRouter.post('/api/game', (req, res) => {
        return res.json(stateService.initGame())
    })

    apiRouter.post('/api/game/:gameId/join', ({ params: { gameId } }, res) => {
        try {
            res.json(stateService.join(gameId))
        } catch (err) {
            res.status(400).send(`Cannot join game ${gameId}`)
        }
    })

    return apiRouter;

};