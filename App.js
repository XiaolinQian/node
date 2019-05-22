'use strict';

const express = require('express');
const config = require('./config/Config');
const log4js = require('log4js');
const log4jsUtil = require('./lib/util/Log4jsUtil');
const migrateSQLUtil = require('./lib/utils/MigrateSQLUtil');
const scheduleDefine = require('./lib/schedule/ScheduleDefine');

// log4js初始化 - 不可修改
log4jsUtil.initLog4js();

// 定时任务初始化 - 不可修改
scheduleDefine.loadSchedules();

// SQL脚本初始化 - 不可修改
migrateSQLUtil.initSQLMigrate();

// express初始化
const app = express();
app.use(require('body-parser')()); // 不可修改
app.use(require('./lib/middleware/Access')); // 不可修改

// 开发者自定义中间件，放在/lib/middleware目录内
// 例： app.use(require('./lib/middleware/xxx'))

// 开发者自定义API，放在/lib/route目录内
// 例： app.use('/api/v1/功能模块名称', require('./lib/route/xxx'))

// Error Handler - 不可修改
app.use(require('./lib/middleware/ErrorHandler'));
// 404  - 不可修改
app.use(require('./lib/middleware/404Handler'));

// 启动
app.listen(config.port, () => {
    log4js.getLogger(config.mode).info(`${config.projectName} running at ${config.port} port.`);
});
