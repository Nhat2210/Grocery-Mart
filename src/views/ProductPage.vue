<script setup>
import { ref } from 'vue';
import { NSelect } from 'naive-ui';
const options = [
    {
        label: '500g',
        value: '500g',
    },
    {
        label: '1000g',
        value: '1000g',
    },
    {
        label: '1500g',
        value: '1500g',
    }
];
</script>
<template>
    <div class="container">
        <div class="product">
                <div class="product__menu">
                    <div class="product__menu__list">
                        <div class="product__menu__item"><a href="#!" class="product__menu__item__link">Departments <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"></a></div>
                        <div class="product__menu__item"><a href="#!" class="product__menu__item__link">Coffee <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"></a></div>
                        <div class="product__menu__item"><a href="#!" class="product__menu__item__link">Coffee Beans <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"></a></div>
                        <div class="product__menu__item"><a href="#!" class="product__menu__item__link">LavAzza<img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"> </a></div>
                    </div>
                </div>
        </div>
        <div class="banner">
            <div class="banner__image">
                <img src="../assets/products/product-1.svg" alt="" class="banner__img">
            </div>
            <div class="banner__content">
                <h3 class="banner__heading">Coffee Beans - Espresso Arabica and Robusta Beans</h3>
                <div class="banner__detail">
                    <div class="banner__detail__left">
                        <div class="banner__detail__left__review">
                            <img src="../assets/icons/star.svg" alt="star" class="banner__detail__left__review__icon">
                            <p class="banner__detail__left__review__content">(3.5) 1100 reviews</p>
                        </div>
                        <div class="banner__detail__left__sizeWeight">
                            <h3 class="banner__detail__left__sizeWeight__heading">Size/Weight</h3>
                            <div class="sizeweight">
                                <div class="banner__detail__left__sizeWeight__select">
                                    <n-space vertical>
                                        <n-select v-model:value="choice" :options="options"/>
                                    </n-space>
                                </div>
                                <ul class="banner__detail__left__sizeWeight__list">
                                    <li class="banner__detail__left__sizeWeight__item">Small</li>
                                    <li class="banner__detail__left__sizeWeight__item">Medium</li>
                                    <li class="banner__detail__left__sizeWeight__item">Large</li>
                                </ul>
                            </div>
                        </div>
                        

                    </div>
                    <div class="banner__detail__right">
                        <div class="banner__detail__right__compare">
                            <img src="../assets/icons/compare.svg" alt="" class="banner__detail__right__compare__icon">
                            <div class="banner__detail__right__compare__content">
                                <div class="banner__detail__right__compare__heading">Compare</div>
                                <div class="banner__detail__right__compare__desc"></div>
                            </div>
                        </div>
                        <div class="banner__detail__right__deliver">
                            <img src="../assets/icons/bag.svg" alt="" class="banner__detail__right__deliver__icon">
                            <div class="banner__detail__right__deliver__content">
                                <div class="banner__detail__right__deliver__heading">Deliver</div>
                                <div class="banner__detail__right__deliver__desc">From $6 for 1-3 days</div>
                            </div>
                        </div>
                        <div class="banner__detail__right__pickup">
                            <img src="../assets/icons/buy.svg" alt="" class="banner__detail__right__pickup__icon">
                            <div class="banner__detail__right__pickup__content">
                                <div class="banner__detail__right__pickup__heading">Pickup</div>
                                <div class="banner__detail__right__pickup__desc">Out of 2 store, today</div>
                            </div>
                        </div>
                        <div class="banner__detail__right__addCard">
                            <div class="banner__detail__right__addCard__origin">
                                <div class="banner__detail__right__addCard__origin__price">$500</div>
                                <div class="banner__detail__right__addCard__origin__discount">10%</div>
                            </div>
                            <div class="banner__detail__right__addCard__sale">
                                <h3 class="banner__detail__right__addCard__sale__price">$540.00</h3>
                            </div>
                            <div class="banner__detail__right__addCard__button">
                                <button class="banner__detail__right__addCard__button__btn">Add to cart</button>
                                <img src="../assets/icons/heart.svg" class="banner__detail__right__addCard__button__icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.container{
}
.product{
    &__menu{
        background-color: #abb8ca;
        padding: 20px;
        border-radius: 10px;
        margin: 30px 0;
        &__list{
            display: flex;
        }
        &__item{
            margin-right: 10px;
            &__link{
            display: flex;
            gap: 10px;
            }
            &__icon{
                width: 5%;
            }
        }

    }
}
.banner{
    display: flex;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &__image{
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e5e2e2;
    }
    &__content{
        width: 55%;
        background-color: #e5e2e2;
        padding: 60px;
    }
    &__heading{
        font-size: 2.6rem;
        font-weight: 500;
        margin-bottom: 30px;
    }
    &__detail{
        display: flex;
        &__left{
            width: 50%;
            &__sizeWeight{
                width: 80%;
                &__heading{
                    font-weight: 500;
                    font-size: 2.2rem;
                }
                &__select{
                    margin: 20px 0;
                }
                &__list{
                    display: flex;
                    justify-content: space-around;
                }
                &__item{
                    background-color: #f6f6f6;
                    padding: 5px;
                    border-radius: 2px;
                    color: black;
                    &:hover{
                        color: white;
                        background-color: #abb8ca;
                    }
                }
            }
            &__review{
                display: flex;
                align-items: center;
                margin-bottom: 30px;
                &__icon{
                    margin-right: 15px;
                }
                &__content{
                    font-weight: 500;
                    font-size: 1.8rem;
                }
            }
        }

        &__right{
            width: 50%;
            &__compare{
                display: flex;
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 27px;
                gap: 10px;
                &__icon{
                    margin-right: 10px;
                }
            }
            &__deliver{
                display: flex;
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 27px;
                gap: 10px;
                &__icon{
                    margin-right: 10px;
                    align-self: flex-start;
                }
                &__heading{
                    margin-bottom: 10px;
                }
                &__desc{
                    font-size: 1.4rem;
                    font-weight: 400;
                }
            }
            &__pickup{
                display: flex;
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 27px;
                gap: 10px;
                &__icon{
                    margin-right: 10px;
                    align-self: flex-start;
                }
                &__heading{
                    margin-bottom: 10px;
                }
                &__desc{
                    font-size: 1.4rem;
                    font-weight: 400;
                }
            }
            &__addCard{
                border: 1px solid gray;
                border-radius: 5px;
                padding: 20px;
                &__origin{
                    display: flex;
                    font-weight: 500;
                    font-size: 1.6rem;
                    margin-bottom: 20px;
                    &__price{
                        margin-right: 10px;
                    }
                    &__discount{
                        color: #67B044;
                        background-color: #d8eece;
                    }
                }
                &__sale{
                    font-weight: 500;
                    font-size: 2.6rem;
                }
                &__button{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 20px;
                    &__btn{
                        display: block;
                        border: none;
                        background-color: #FFB700;
                        padding: 10px 55px;
                        border-radius: 6px;
                        cursor: pointer;
                    }
                    &__icon{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid gray;
                        padding: 5px;
                    }
                }
            }
        }
    }
}
</style>