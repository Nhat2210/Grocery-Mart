<template>
<div class="filter">
<h3 class="filter__heading">Filter</h3>
<form action="" class="filter__form">
    <div class="filter__row">
        <!--Filter column 1-->
        <div class="filter__column">
            <h3 class="filter__column__heading"></h3>
            <div class="slider">
                <n-space vertical>
                    <n-slider v-model:value="value" range :step="1" />
                    <n-space>
                    <n-input-number v-model:value="value[0]" size="small" />
                    <n-input-number v-model:value="value[1]" size="small" />
                </n-space>
            </div>
        </div>
        <!--Filter column 2-->
        <!--Filter column 3-->
    </div>
</form>
</div>
</template>

<script>
import { NSpace, NSlider } from 'naive-ui';
</script>

<style lang="scss" scoped>

</style>