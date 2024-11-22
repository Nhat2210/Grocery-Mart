<template>
  <Header/>
  <slideshow/>
 
  <browsecategories/>





   <!-- <Footer/> -->
</template>

<script setup>
import { ref } from 'vue';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
import slideshow from './components/slideshow.vue';
import browsecategories from './components/browsecategories.vue';
const feature = ref();
</script>

<style lang="scss" scoped>
</style>