'use strict';

const log4js = require('log4js');

/**
 * 异常处理
 */
module.exports = function (err, req, res, next) { // eslint-disable-line
    if (err.httpStatusCode === 400) {
        log4js.getLogger('access').error(`400 Bad Request: ${err.stack}`);
        res.status(400).json({ 'success': false, 'msg': err.message });
    } else if (err.httpStatusCode === 401) {
        log4js.getLogger('access').error(`401 Unauthorized: ${err.stack}`);
        res.status(401).json({ 'success': false, 'msg': err.message });
    } else {
        log4js.getLogger('access').error(`500 Interval Error: ${err.stack}`);
        res.status(500).json({ 'success': false, 'msg': err.message });
    }
};
