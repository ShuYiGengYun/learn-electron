<template>
    <div class="notification-container">
        <button @click="sendWindowsNofication">发送一个windows通知</button>
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
        Notification.init();
        BrowserWindowParams.register();
      }
    },
  }
</script>

<style scoped>

</style>
