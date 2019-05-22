'use strict';

/**
 * 服务层返回对象，便于统一格式供route处理
 */
class ServiceResult {
    /**
     * 构造函数
     * @param {string} error 错误信息
     * @param {any} data 数据
     */
    constructor(error, data) {
        this.error = error;
        this.data = data;
    }
}

module.exports = ServiceResult;
