const Notification = require('electron');
class MainNotification extends Notification{
  constructor (configs) {
    super();
    this.configs = configs;
  }
  notificationShow () {
    this.show(this.configs);
  }
}

module.exports = {
  MainNotification,
}

