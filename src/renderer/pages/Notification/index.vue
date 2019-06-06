<template>
    <div class="notification-container">
        <button @click="sendWindowsNofication">发送一个windows通知(HTML5)</button>
        <button @click="sendNotification">发送一条桌面通知(node-notifier)</button>
        <button @click="sendNotificationByMain">发送一条桌面通知(Main)</button>
        <button @click="sendNotificationByNative">发送一条桌面通知(electron-native-notification)</button>
    </div>
</template>

<script>
  export default {
    name: "Notification",
    data() {
      return {
        win: null,
      };
    },
    methods: {
      sendWindowsNofication() {
        /*不支持win10,只支持渲染进程*/
        const { Notification, BrowserWindowParams } = require('@/modules/notification');
        const log = require('../../../common/log');
        Notification.init();
        BrowserWindowParams.register();
      },
      sendNotification() {
        /*支持各平台,但是win7效果不一致*/
        const notifier = require('node-notifier');
          notifier.notify({
              title: 'My notification',
              message: 'Hello, there!'
          });
      },

      sendNotificationByMain() {
        /*支持win7,不支持win10*/
        const { Notification } = require('electron').remote;
        const notification = new Notification({
          title: 'This is Notifiation Title',
          body: 'This is Notification Body'
        });
        notification.show();
      },
      sendNotificationByNative() {
        /*支持win7*/
        const opt = { body: 'See? Really easy to use!' };

        const notification = new Notification('I am a notification!', opt);

        notification.on('show', () => {
          console.log('I\'m coming~');
        });
      }
    },
  }
</script>

<style scoped>
    button{
        display: block;
    }
</style>
