'use strict';

const dbConfig = require('../../config/Config').mysql;
const path = require('path');

/**
 * MySQL版本管理公共参数 - 不可修改
 */
exports.migrateOptions = {
    'migrationsDir': path.join(__dirname, '../../sql/migrations'),
    'host': dbConfig.host,
    'port': dbConfig.port,
    'db': dbConfig.database,
    'user': dbConfig.user,
    'password': dbConfig.password,
    'adapter': 'mysql'
};
