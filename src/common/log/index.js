/**
 *Created by Shinelon on 2019/5/19
 */
const path = require('path');
const fs = require('fs');
const log = require('electron-log');
const logPathDir = path.resolve(__dirname,'../../../', 'log');
const logFileName = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
log.transports.file.level = 'info';
fs.exists(logPathDir, function (isExists) {
    if (!isExists) {
        fs.mkdir(logPathDir, function (err) {
            if (err) {
                throw err;
            }
        })
    }
})
log.transports.file.file = `${logPathDir}/${logFileName}.txt`;
module.exports = log;