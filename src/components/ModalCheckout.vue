<script setup>
import { ref } from 'vue';
const item1_price = ref(329.00);
const item2_price = ref(39.99);
const item3_price = ref(47.00);

const subTotal = () => {
    return item1_price.value + item2_price.value + item3_price.value;
};

const shipping = ref(10.00);
const totalPrice = () => {
    return subTotal() + shipping.value;
};
</script>
<template>
<div class="checkout">
    <div class="checkout__wrapper">
        <div class="checkout__heading">
            <div class="h3 checkout__heading__title">You have 3 items</div>
            <button class="checkout__heading__seeAll">See All</button>
        </div>
        <div class="checkout__product__list">
            <div class="checkout__product__item">
                <img src="../assets/products/product-1.svg" alt="" class="checkout__product__item__img">
                <p class="checkout__product__item__name">Lavazza Coffee Blends </p>
                <p class="checkout__product__item__price">${{  item1_price.toFixed(2) }}</p>
            </div>
            <div class="checkout__product__item">
                <img src="../assets/products/product-2.svg" alt="" class="checkout__product__item__img">
                <p class="checkout__product__item__name">Coffee Beans Espresso</p>
                <p class="checkout__product__item__price">${{ item2_price }}</p>
            </div>
            <div class="checkout__product__item">
                <img src="../assets/products/product-3.svg" alt="" class="checkout__product__item__img">
                <p class="checkout__product__item__name">Qualità Oro Mountain</p>
                <p class="checkout__product__item__price"> ${{ item3_price.toFixed(2) }}</p>
            </div>
        </div>
        <div class="checkout__separate"></div>
        <div class="checkout__money">
            <div class="checkout__subTotal">
                <p class="checkout__subTotal__title">SubTotal:</p>
                <p class="checkout__subTotal__number">{{ subTotal() }}</p>
            </div>
            <div class="checkout__texes">
                <p class="checkout__texes__title">Texes:</p>
                <p class="checkout__texes__number">Free</p>
            </div>
            <div class="checkout__shipping">
                <p class="checkout__shipping__title">Shipping:</p>
                <p class="checkout__shipping__number">{{ shipping }}</p>
            </div>
            <div class="checkout__totalPrice">
                <p class="checkout__totalPrice__title">TotalPrice:</p>
                <p class="checkout__totalPrice__number">{{ totalPrice() }}</p>
            </div>
        </div>
        <div class="checkout__separate"></div>
        <button class="checkout__btn">
            Check Out All
        </button>
    </div>
</div>
</template>



<style lang="scss" scoped>
.checkout{
    margin-left: auto;
    background-color: #fff;
    width: 550px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 20px;
    margin-top: 20px;
    position: fixed;
    right: 75px;
    z-index: 999;
    &::after{
        content: url(../assets/icons/triangle.svg);
        position: absolute;
        top:-13px;
        right: 120px;
    }
    &__wrapper{
    }
    &__heading{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        &__title{
            font-weight: 500;
            font-size: 2.2rem;
        }
        &__seeAll{
            font-size: 2.2rem;
            font-weight: 500;
            border:none;
            background-color: #fff;
            color: #0071DC;
            cursor: pointer;
        }
    }
    &__product__list{
        display: flex;
        gap: 30px;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    &__product__item{
        &__img{
            width: 100%;
            background-color: #e8e6e0;
            margin-bottom: 14px;
        }
        &__name{
            font-size: 1.3rem;
            font-weight: 400;
            margin-bottom: 6px;
        }
        &__price{
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
    &__separate{
        width: 100%;
        height: 0.1px;
        background-color: #9E9DA8;
        opacity: 0.6;
        margin-bottom: 30px;
    }
    &__money{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
        font-size: 2rem;
        font-weight: 400;
    }
    &__subTotal{
        display: flex;
        justify-content: space-between;
    }
    &__texes{
        display: flex;
        justify-content: space-between;
    }
    &__shipping{
        display: flex;
        justify-content: space-between;
    }
    &__totalPrice{
        display: flex;
        justify-content: space-between;
    }
    &__btn{
        border: none;
        background-color: #FFB700;
        color: #1A162E;
        padding: 15px 30px;
        font-size: 2rem;
        font-weight: 500;
        margin-left: auto;
        display: block;
        text-align: center;
        border-radius: 999px;
        cursor: pointer;
        &:hover{
            background-color: #ffcc00;
            color:#3a3457;
        }
    }
    
}

</style>