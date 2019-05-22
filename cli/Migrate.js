'use strict';

const migrations = require('sql-migrations');
const migrateOptions = require('../lib/common/GlobalVariable').migrateOptions;

/**
 * 客户端
 * 在./sql/migrations生成.sql文件：在cle目录下执行node ./Migrate.js create 脚本名称
 * 或者 在项目根目录下执行npm run migrateNew 脚本名称
 */
migrations.run(migrateOptions);
