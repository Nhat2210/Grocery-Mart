<template>
  <Header/>
  <div class="test"></div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './views/Header.vue';
const feature = ref();
</script>

<style lang="scss" scoped>
.test{
  height: 1000px;
  background: #fff;
}
</style>