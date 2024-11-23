<script setup>

</script>


<template>
<div class="container">
    <div class="home">
    <h2 class="home__heading">Browse Categories</h2>
    <ul class="home__list">
        <!--First Item-->
        <li class="home__item"><a href="" class="home__link">
            <div class="home__img"><img src="../assets/categories/item-1.svg" alt=""></div>
            <div class="home__content">
                <div class="home__price">$24 - $150</div>
                <div class="home__desc">New sumatra mandeling coffe blend</div>
            </div>
        </a></li>
        <!--Second Item-->
        <li class="home__item"><a href="" class="home__link">
            <div class="home__img">
                <img src="../assets/categories/item-2.svg" alt="">
            </div>
            <div class="home__content">
                <div class="home__price">$37 - $160</div>
                <div class="home__desc">Espresso arabica and robusta beans</div>
            </div>
        </a></li>
        <!--Third item-->
        <li class="home__item"><a href="" class="home__link">
            <div class="home__img">
                <img src="../assets/categories/item-3.svg" alt="">
            </div>
            <div class="home__content">
                <div class="home__price">$32 - $160</div>
                <div class="home__desc">Lavazza top class whole bean coffee blend</div>
            </div>
        </a></li>
    </ul>
</div>
</div>
</template>



<style lang="scss" scoped>
.home{
    margin-bottom: 40px;
    &__heading{
        font-size: 2.4rem;
        font-family: Gordita;
        font-weight: 700;
        margin-bottom: 20px;
    }
    &__list{
        display: flex;
        justify-content: space-between;
    }
    &__item{
        width: 350px;
        padding: 20px;
        background-color: #eeeeee;
        border-radius: 16px;

    }
    &__link{
        display: flex;
        gap: 10px;
    }
    &__img{
        padding: 10px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        img{
            width: 90%;
        }
    }
    &__price{

        font-weight: 700;
        font-size: 2.2rem;
        line-height: 2.5;
    }


}
</style>