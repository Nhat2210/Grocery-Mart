<template>
  <Header/>
  <slideshow/>
  <browsecategories/>
  <totalProduct/>





   <!-- <Footer/> -->
</template>

<script setup>
import { ref } from 'vue';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
import slideshow from './components/slideshow.vue';
import browsecategories from './components/browsecategories.vue';
import totalProduct from './components/TotalProduct.vue';
const feature = ref();
</script>

<style lang="scss" scoped>
</style>