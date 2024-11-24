<template>
  <Header/>
  <slideshow/>
  <browsecategories/>
  <totalProduct/>




  <n-back-top :right="50" />
   <Footer/>
</template>

<script setup>
import { ref } from 'vue';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
import slideshow from './components/slideshow.vue';
import browsecategories from './components/browsecategories.vue';
import totalProduct from './components/TotalProduct.vue';
import { NBackTop } from 'naive-ui';
const feature = ref();
</script>

<style lang="scss" scoped>
</style>