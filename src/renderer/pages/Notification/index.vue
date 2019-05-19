<template>
    <div class="notification-container">
        <button @click="sendWindowsNofication">发送一个windows通知</button>
        <button @click="sendNotification">发送一条桌面通知</button>
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
        const { Notification, BrowserWindowParams } = require('@/modules/notification');
        const log = require('../../../common/log');
        Notification.init();
        BrowserWindowParams.register();
      },
      sendNotification() {
          const notifier = require('node-notifier');
          notifier.notify({
              title: 'My notification',
              message: 'Hello, there!'
          });
      }
    },
  }
</script>

<style scoped>

</style>
