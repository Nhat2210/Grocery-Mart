<template>
    <h1>cc</h1>
<h1>{{ count }}</h1>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(1);
console.log(count.value);
</script>

<style lang="scss" scoped>

</style>