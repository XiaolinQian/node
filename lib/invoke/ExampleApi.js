'use strict';

// const request = require('request');
// const log4js = require('log4js');

/**
 *  http请求例子
 * @param {string} a 入参
 * @param {string} b 入参
 */
// function example(a, b) {
//     let method = 'GET' // 请求类型：GET POST PUT DELETE
//     let url = protocol + '://' + host + '/api/v1/me' // protocol host 配置文件配置
//     let headers = { 'content-type': 'application/json' } // Headers设置，非必需
//     let body = { 'a' : a, 'b': b} // POST，PUT请求的body json
//     let options = {
//         method: method,
//         url: url,
//         headers: headers,
//         body: {}, // POST请求的body json
//         json: true
//     }
//     log4js.getLogger('invoke').info('Invoke IM, Method: ' + method + ', URL: ' + url) // GET DELETE
//     log4js.getLogger('invoke').info('Invoke IM, Method: ' + method + ', URL: ' + url + ', BODY:' + JSON.stringify(body)) // POST PUT
//     return new Promise((resolve, reject) => { // Promise封装
//         request(options, (err, res, body) => {
//             if (err) { // 异常 reject
//                 log4js.getLogger('invoke').error('Invoke Failed: ' + err.message)
//                 reject(err)
//             } else {
//                 if (parseInt(res.statusCode) === 200) { // 200 resolve，需要注意的是，某些非200也需要resovle，根据业务决定
//                     log4js.getLogger('invoke').info('Invoke Success: ' + JSON.stringify(body))
//                     resolve(body)
//                 } else { // 非200 reject
//                     log4js.getLogger('invoke').error('Invoke Failed: code ' + res.statusCode + ', message: ' + res.statusMessage)
//                     reject(new Error('invoke failed, response status code is ' + res.statusCode))
//                 }
//             }
//         })
//     })
// }

// exports.example = example
