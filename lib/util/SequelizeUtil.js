'use strict';

const Sequelize = require('sequelize');
const dbConfig = require('../../config/Config').mysql;
const log4js = require('log4js');

exports.sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    operatorsAliases: false,
    logging:
    function (sql) {
        log4js.getLogger('database').info(sql);
    },
    pool: {
        max: dbConfig.poolMax,
        min: dbConfig.poolMin,
        acquire: dbConfig.poolAcquire,
        idle: dbConfig.poolIdle
    }
});
