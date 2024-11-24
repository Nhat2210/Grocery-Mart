<template>
    <router-view>
        <Header/>
      <slideshow/>
      <browsecategories/>
      <totalProduct/>
    
    
    
    
      <n-back-top :right="50" />
       <Footer/>
    </router-view>
    </template>
    
    <script setup>
    import { RouterView } from 'vue-router';
    import { ref } from 'vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import slideshow from './components/slideshow.vue';
    import browsecategories from './components/browsecategories.vue';
    import totalProduct from './components/TotalProduct.vue';
    import { NBackTop } from 'naive-ui';
    const feature = ref();
    </script>
    
    <style lang="scss" scoped>
    </style>