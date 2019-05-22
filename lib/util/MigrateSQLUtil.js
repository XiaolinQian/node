'use strict';

const migrations = require('sql-migrations');
const migrateOptions = require('../common/GlobalVariable').migrateOptions;
const sequelizeUtil = require('../utils/SequelizeUtil');
const sequelize = sequelizeUtil.sequelize;

/**
 * 项目启动加载未升级的SQL脚本
 */
async function initSQLMigrate() {
    // 创建__migrations__表
    await sequelize.query('CREATE TABLE IF NOT EXISTS `__migrations__`  ( `id` varchar(32) NOT NULL )');
    const Adapter = require(`sql-migrations/adapters/${migrateOptions.adapter}`);
    const adapter = Adapter(migrateOptions, console);
    migrations.migrate(migrateOptions, adapter);
}

exports.initSQLMigrate = initSQLMigrate;
