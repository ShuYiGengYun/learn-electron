const { Notification } = require('electron');
if (!Notification.isSupported()) {
    return false;
}
const notification = new Notification({
    title: 'HelloWorld',
    body: 'This is Body Content',
    silent: false,
    icon: '',
});

module.exports = Notification;