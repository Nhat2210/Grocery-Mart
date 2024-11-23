<script>
import { ModalFilter } from '../components/ModalFilter.vue';
import { defineProps } from 'vue';

const props = defineProps({
    isshowModal: {
        type: Boolean,
        require: true,
    }
})
</script>

<template>
<div class="container">
    <div class="Total-product">
        <div class="Total-product__title">
            <h2 class="Total-product__heading">Total LavAzza 1320</h2>
            <button @click="isShowModal = true" class="filter-btn">
                Filter
                <img src="../assets/icons/filter.svg" alt="" class="filter-btn__icon">
            </button>
            <ModalFilter/>
        </div>
        <div class="Total-product__list">
            <!--Product 1-->
            <div class="Total-product__item">
                <div class="Total-product__image">
                    <img src="../assets/products/product-1.svg" alt="" class="Total-product__img">
                    <button class="Total-product__heart">
                        <img src="../assets/icons/heart.svg" alt="">
                    </button>
                </div>
                <div class="Total-product__content">
                    <div class="Total-product__name">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                    <div class="Total-product__brand">Lavazza</div>
                    <div class="Total-product__priceandjudge">
                        <div class="Total-product__price">$47.00</div>
                        <div class="Total-product__judge">
                            <img src="../assets/icons/star.svg" alt="" class="judge__star">
                            <div class="judge__number">4.3</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Product 2-->
            <div class="Total-product__item">
                <div class="Total-product__image">
                    <img src="../assets/products/product-2.svg" alt="" class="Total-product__img">
                    <button class="Total-product__heart">
                        <img src="../assets/icons/heart.svg" alt="">
                    </button>
                </div>
                <div class="Total-product__content">
                    <div class="Total-product__name">Lavazza Coffee Blends - Try the Italian Espresso</div>
                    <div class="Total-product__brand">Lavazza</div>
                    <div class="Total-product__priceandjudge">
                        <div class="Total-product__price">$53.00</div>
                        <div class="Total-product__judge">
                            <img src="../assets/icons/star.svg" alt="" class="judge__star">
                            <div class="judge__number">3.4</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Product 3-->
            <div class="Total-product__item">
                <div class="Total-product__image">
                    <img src="../assets/products/product-3.svg" alt="" class="Total-product__img">
                    <button class="Total-product__heart">
                        <img src="../assets/icons/heart.svg" alt="">
                    </button>
                </div>
                <div class="Total-product__content">
                    <div class="Total-product__name">Lavazza - Caffè Espresso Black Tin - Ground coffee</div>
                    <div class="Total-product__brand">welikecoffee</div>
                    <div class="Total-product__priceandjudge">
                        <div class="Total-product__price">$99.99</div>
                        <div class="Total-product__judge">
                            <img src="../assets/icons/star.svg" alt="" class="judge__star">
                            <div class="judge__number">5.0</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Product 4-->
            <div class="Total-product__item">
                <div class="Total-product__image">
                    <img src="../assets/products/product-4.svg" alt="" class="Total-product__img">
                    <button class="Total-product__heart">
                        <img src="../assets/icons/heart.svg" alt="">
                    </button>
                </div>
                <div class="Total-product__content">
                    <div class="Total-product__name">Qualità Oro Mountain Grown - Espresso Coffee Beans</div>
                    <div class="Total-product__brand">Lavazza</div>
                    <div class="Total-product__priceandjudge">
                        <div class="Total-product__price">$38.65</div>
                        <div class="Total-product__judge">
                            <img src="../assets/icons/star.svg" alt="" class="judge__star">
                            <div class="judge__number">4.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>



<style lang="scss" scoped>

.Total-product{
    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .Total-product__heading{
            font-size: 2.4rem;
            font-weight: 700;
        }
        .filter-btn{
            display: flex;
            align-items: center;
            gap: 2px;
            padding: 6px 12px;
            background-color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
    }
    &__list{
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    &__item{
        padding: 16px;
        background-color: #fff;
        border-radius: 20px;
    }
    &__image{
        width: 200px;
        height: 180px;
        position: relative;
        display: block;
        margin: 0 auto;
        cursor: pointer;
        .Total-product__img{
            width: 80%;
            display: block;
            margin: 0 auto;
        }
        .Total-product__heart{
            position: absolute;
            bottom: 10px;
            right: 10px;
            border: none;
            padding: 5px;
            border-radius: 50%;
            img{
                width: 80%;
            }
        }
    }
    &__content{
        .Total-product__name{
            margin-top: 16px;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 1.8;
        }
        .Total-product__brand{
            margin-top: 16px;
            font-size: 1.5rem;
            color:#9E9DA8;
            font-weight: 400;
        }
        .Total-product__priceandjudge{
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            .Total-product__price{
                font-size: 1.6rem;
                font-weight: 500;
            }
            .Total-product__judge{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 7px;
                .judge__star{

                }
                .judge__number{
                    font-size: 1.5rem;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>