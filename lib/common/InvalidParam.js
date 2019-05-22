'use strict';

/**
 * 参数类型：path
 */
const PATH = 'path';
/**
 * 参数类型：body
 */
const BODY = 'body';

/**
 * 返回400错误
 * @param {string} type
 * @param {string} paramName
 */
function invalidParam(type, paramName) {
    const err = new Error(`invalid.${type}.param: ${paramName}`);
    err.httpStatusCode = 400;
    return err;
}

module.exports = {
    PATH: PATH,
    BODY: BODY,
    invalidParam: invalidParam
};
