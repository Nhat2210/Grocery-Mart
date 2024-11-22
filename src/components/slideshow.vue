<script setup>
import { NCarousel } from 'naive-ui'
</script>

<template>
<div class="container">
    <div class="slideshow">
        <n-carousel show-arrow>
            <img src="../assets/slideshow/item-1.png" alt="" class="slideshow__img">
            <img src="../assets/slideshow/item-1.png" alt="" class="slideshow__img">
            <img src="../assets/slideshow/item-1.png" alt="" class="slideshow__img">
            <img src="../assets/slideshow/item-1.png" alt="" class="slideshow__img">
        </n-carousel>
    </div>
</div>
</template>



<style lang="scss" scoped>
.slideshow{
    margin: 40px 0;
    &__img{
        width: 100%;
        height: 350px;
        object-fit: cover;
        border-radius: 15px;
    }
}

</style>