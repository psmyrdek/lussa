const express = require('express')

const { createApiRouter } = require('./routes/api')
const { createUiRouter } = require('./routes/ui')
const stateService = require('./services/state.service')

module.exports.createApp = (config) => {
    const app = express();

    app.use([
        createApiRouter(stateService),
        createUiRouter(config)
    ]);

    return app;
}