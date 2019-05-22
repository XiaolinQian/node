'use strict';

const log4js = require('log4js');

/**
 * 404处理
 */
module.exports = function (req, res, next) { // eslint-disable-line
    log4js.getLogger('access').error('404 Not Found');
    res.status(404).json({ 'success': false, 'msg': 'invalid.url' });
};
