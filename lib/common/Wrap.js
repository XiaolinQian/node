'use strict';

/**
 * 统一异常捕获定义函数 - 不可修改
 * @param {function} fn 函数
 */
const wrap = fn => (...args) => fn(...args).catch(args[2]);

module.exports.wrap = wrap;
