'use strict';

// const sequelizeUtil = require('../util/SequelizeUtil');
// const Sequelize = exports.Sequelize = require('sequelize');

/**
 * Sequelize的数据ORM模型维护
 */
// 例子： 表
// const Example1 = exports.Example1 = sequelizeUtil.sequelize.define('example1', {
//     id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
//     name: { type: Sequelize.STRING, allowNull: false },
// }, { tableName: 'example_1', timestamps: false })
// const Example2 = exports.Example2 = sequelizeUtil.sequelize.define('example2', {
//     id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
//     example1Id: { type: Sequelize.BIGINT, allowNull: false },
//     name: { type: Sequelize.STRING, allowNull: false },
// }, { tableName: 'example_2', timestamps: false })

// 例子：关系
// exports.AsExample1ToExample2 = Example1.hasMany(Example2, { foreignKey: 'example1Id', sourceKey: 'id' })
// exports.AsExample2ToExample1 = Example2.belongsTo(Example1, { foreignKey: 'applicationId', sourceKey: 'id' })
