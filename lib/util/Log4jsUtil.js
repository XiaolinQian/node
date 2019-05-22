'use strict';

const log4jsConfig = require('../../config/Log4js');
const path = require('path');
const log4js = require('log4js');

/**
 * Log4js初始化
 */
function initLog4js() {
    // 业务日志
    log4jsConfig.appenders.logFile.filename = path.join(__dirname, '../../logs/log.log');
    // 数据库SQL日志
    log4jsConfig.appenders.databaseFile.filename = path.join(__dirname, '../../logs/database.log');
    // 被请求日志
    log4jsConfig.appenders.accessFile.filename = path.join(__dirname, '../../logs/access.log');
    // 调用第三方日志
    log4jsConfig.appenders.invokeFile.filename = path.join(__dirname, '../../logs/invoke.log');
    // 调用第三方日志
    log4jsConfig.appenders.scheduleFile.filename = path.join(__dirname, '../../logs/schedule.log');

    log4js.configure(log4jsConfig);
}

exports.initLog4js = initLog4js;
