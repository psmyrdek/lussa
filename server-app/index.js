const express = require('express')
const { createApiRouter } = require('./routes/api')
const { createUiRouter } = require('./routes/ui')
const { loggerMiddleware, logRequest } = require('./middlewares/logger')
const stateService = require('./services/state.service')

module.exports.createApp = (config) => {
    const app = express();

    app.use([
        loggerMiddleware,
        logRequest(),
        createApiRouter(stateService),
        createUiRouter(config)
    ]);

    return app;
}