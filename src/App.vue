<template>
  <n-config-provider>
    <n-message-provider>
      <router-view/>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { NMessageProvider } from 'naive-ui';
import { NConfigProvider } from 'naive-ui';
</script>

<style lang="scss" scoped>
</style>
