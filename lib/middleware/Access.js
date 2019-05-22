'use strict';

const log4js = require('log4js');

/**
 * 被调用时记录请求信息
 */
module.exports = function (req, res, next) {
    try {
        const pathname = req.url;
        if (req.method === 'GET' || req.method === 'get') {
            log4js.getLogger('access').info(`Path: ${pathname}, Method: GET`);
            next();
        } else if (req.method === 'POST' || req.method === 'post') {
            log4js.getLogger('access').info(`Path: ${pathname}, Method: POST, Body: ${JSON.stringify(req.body)}`);
            next();
        } else if (req.method === 'PUT' || req.method === 'put') {
            log4js.getLogger('access').info(`Path: ${pathname}, Method: PUT, Body: ${JSON.stringify(req.body)}`);
            next();
        } else if (req.method === 'DELETE' || req.method === 'delete') {
            log4js.getLogger('access').info(`Path: ${pathname}, Method: DELETE`);
            next();
        }
    } catch (err) { // 非业务逻辑错误
        next(err);
    }
};
