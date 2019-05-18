const path = require('path')
const { shell } = require('electron')
const { BrowserWindow } = require('electron').remote
let win = null
let notification = null

/*about-notification*/
const Notification = {}
const notificationOptons = {
  title: '你订阅的《海贼王》更新了',
  body: '《海贼王》已更新至第852集 激斗开幕 路飞VS卡塔库栗',
  icon: '',
  href: 'https://www.iqiyi.com/v_19rqz6uit0.html'
}
Notification.init = function () {
  notification = new window.Notification(notificationOptons.title, notificationOptons)
}

/*about-electron-browserWindow*/
const BrowserWindowParams = {}
const clickEventsCallback = function (event) {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.on('closed', function () {
    win = null
  })
  win.loadURL(notificationOptons.href)
}
const eventConfigs = [
  {
    event: 'click',
    callback: clickEventsCallback,
  }
]
/*event-register*/
BrowserWindowParams.register = function () {
  eventConfigs.forEach(function (config) {
    notification[`on${config.event}`] = config.callback
  })
}

module.exports = {
  Notification,
  BrowserWindowParams,
}
