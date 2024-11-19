<template>
  <div class="hihi">
    xin chao
    <p class="hihi_hehe">hehe</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const feature = ref();
</script>

<style lang="scss" scoped>
.hihi{
  width: 100px;
  font-size: 29px;
  &_hehe{
    font-size: 50px;
    font-family: Gordita, sans-serif;
    font-weight: 500;
  }
}
</style>