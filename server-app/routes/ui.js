const express = require('express')
const uiRouter = require('express').Router()
const {join} = require('path')

module.exports.createUiRouter = (config) => {

    const renderGame = (req, res) => {
        res.sendFile(join(config.staticFilesRoot, 'index.html'))
    }

    uiRouter.get('/', renderGame)
    uiRouter.get('/game/:gameId', renderGame)

    uiRouter.use('/statics', express.static(config.staticFilesRoot))

    return uiRouter;

}