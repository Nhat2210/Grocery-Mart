<template>
    <div class="dropdown">
        <div class="dropdown__inner">

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.dropdown{
    position: absolute;
    left: 0;
    padding-top: 54px;
    display: none;
    &__inner{
        position: relative;
        border-radius: 20px;
        background: #fff;
        padding: 30px;
        box-shadow: 0px 40px 90px 20px rgba(200, 200, 200, 0.4);
        &::before{
            content: url("../assets/icons/dropdown-arrow.svg");
            position: absolute;
            top:-13px;
            left: 600px;
        }
    }
}

</style>