'use strict';

/**
 * log4js配置，请勿修改
 */
module.exports = {
    'appenders': { // 输出
        'console': { // 控制台输出
            'type': 'console'
        },
        'logFile': { // log.log文件输出
            'type': 'dateFile',
            'daysToKeep': 15,
            'pattern': '-yyyy-MM-dd',
            'encoding': 'utf-8'
        },
        'databaseFile': { // database.log文件输出
            'type': 'dateFile',
            'daysToKeep': 15,
            'pattern': '-yyyy-MM-dd',
            'encoding': 'utf-8'
        },
        'accessFile': { // access.log文件输出
            'type': 'dateFile',
            'daysToKeep': 15,
            'pattern': '-yyyy-MM-dd',
            'encoding': 'utf-8'
        },
        'invokeFile': { // invoke.log文件输出
            'type': 'dateFile',
            'daysToKeep': 15,
            'pattern': '-yyyy-MM-dd',
            'encoding': 'utf-8'
        },
        'scheduleFile': { // schedule.log文件输出
            'type': 'dateFile',
            'daysToKeep': 15,
            'pattern': '-yyyy-MM-dd',
            'encoding': 'utf-8'
        }
    },
    'categories': { // 分类
        'default': { // 默认
            'appenders': [
                'console',
                'logFile'
            ],
            'level': 'ALL'
        },
        'database': { // 数据库
            'appenders': [
                'databaseFile'
            ],
            'level': 'ALL'
        },
        'access': { // 本地被请求
            'appenders': [
                'console',
                'accessFile'
            ],
            'level': 'INFO'
        },
        'invoke': { // 请求第三方
            'appenders': [
                'console',
                'invokeFile'
            ],
            'level': 'INFO'
        },
        'schedule': { // 定时任务
            'appenders': [
                'console',
                'scheduleFile'
            ],
            'level': 'INFO'
        },
        'development': { // 开发环境
            'appenders': [
                'console',
                'logFile'
            ],
            'level': 'ALL'
        },
        'test': { // 测试环境
            'appenders': [
                'logFile'
            ],
            'level': 'DEBUG'
        },
        'production': { // 生产环境
            'appenders': [
                'logFile'
            ],
            'level': 'ERROR'
        }
    }
};
