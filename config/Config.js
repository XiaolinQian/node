'use strict';

const configCommon = require('./ConfigCommon');
const configDevelopment = require('./ConfigDevelopment');
const configTest = require('./ConfigTest');
const configProduction = require('./ConfigProduction');

/**
 * 配置文件： config包含common和对应部署环境的配置
 */
function chooseConfig() {
    let configEnv = {};
    if (JSON.stringify(configProduction) !== JSON.stringify({})) {
        configEnv = configProduction;
    } else if (JSON.stringify(configTest) !== JSON.stringify({})) {
        configEnv = configTest;
    } else if (JSON.stringify(configDevelopment) !== JSON.stringify({})) {
        configEnv = configDevelopment;
    }
    const config = { ...configCommon, ...configEnv };
    return config;
}

module.exports = chooseConfig();
