'use strict';

const express = require('express');
// const log4js = require('log4js');
// const wrap = require('../common/Wrap').wrap;
// const invalidParam = require('../common/InvalidParam');

const router = express.Router();

/**
 * 接口作用描述
 */
// router.get('/dfs/:count', wrap(
//     async function (req, res, next) {
//         let count = parseInt(req.params.count)
//         if (count <= 0) {
//             return next(invalidParam.invalidParam(invalidParam.PATH, 'count'));
//         }
//         let result = await fileService.getUploadURLFromDFS(count)
//         let jsonResult = {}
//         if (result.error) {
//             jsonResult = { 'success': false, 'msg': result.error }
//         } else {
//             jsonResult = { 'success': true, 'data': result.data }
//         }
//         log4js.getLogger('access').info('200 Response: ' + JSON.stringify(jsonResult))
//         res.json(jsonResult)
//     })
// )

module.exports = router;
