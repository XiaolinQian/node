'use strict';

/**
 * 研发环境
 */
module.exports = {
    'mode': 'developement', // 请勿修改
    'mysql': { // 数据库配置
        'user': 'root', // 数据库用户名
        'password': '123456', // 数据库密码
        'host': '192.168.0.201', // 数据库地址
        'port': 13306, // 数据库端口
        'database': 'metis_attendance', // 库名
        'poolMax': 10,
        'poolMin': 0,
        'poolAcquire': 30000,
        'poolIdle': 10000
    }
};
