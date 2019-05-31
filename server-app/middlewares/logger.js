const logger = require('pino')()

module.exports.loggerMiddleware = (req, res, next) => {
    req.logger = logger;
    next();
}

module.exports.logRequest = () => (req, res, next) => {
    if (res.status > 200) {
        req.logger.info(req);
    }
    next();
}