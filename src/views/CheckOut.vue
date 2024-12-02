
<script setup>
import { ref } from 'vue';
const count = ref(1);
const countPlus = () => {
    count.value++;
};
const countMinus = () => {
    if(count.value > 0) {
        count.value --;
    }
    else{
        count.value = 0;
    }
};
</script>
<template>
<div class="container">
    <div class="checkout">
        <div class="checkout__menu">
            <div class="checkout__menu__list">
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link">Home <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"></a></div>
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link active">Checkout</a></div>
            </div>
        </div>
        <div class="checkout__nav">
            <div class="checkout__product">
                <ul class="product__list">
                    <li class="product__item">
                        <div class="product__item__desc">
                            <img src="../assets/products/product-1.svg" alt="" class="product__item__image">
                            <div class="product__item__content">
                                <div class="product__item__content__name">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                                <div class="product__item__content__price">
                                    <div class="product__item__content__price__money">$47.00</div>
                                    <div class="product__item__content__price__separate"></div>
                                    <div class="product__item__content__price__stock">In Stock</div>
                                </div>
                                <div class="product__item__content__choose">
                                    <div class="product__item__content__choose__brand">abc brand</div>
                                    <div class="product__item__content__choose__count">
                                    <button class="product__item__content__choose__count_minus" @click="countMinus">-</button>   
                                        {{ count }}
                                    <button class="product__item__content__choose__count__plus" @click="countPlus">+</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product__item__realPrice">
                            <div class="product__item__realPrice__price">$47.00</div>
                            <div class="product__item__realPrice__button">
                                <div class="product__item__realPrice__button__save">
                                    <img src="../assets/icons/save.svg" alt="" class="product__item__realPrice__button__save__img">Save
                                </div>
                                <div class="product__item__realPrice__button__delete">
                                    <img src="../assets/icons/Delete.svg" alt="" class="product__item__realPrice__button__delete__img">Delete
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="product__separate"></li>
                    <li class="product__item">
                        <div class="product__item__desc">
                            <img src="../assets/products/product-1.svg" alt="" class="product__item__image">
                            <div class="product__item__content">
                                <div class="product__item__content__name">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                                <div class="product__item__content__price">
                                    <div class="product__item__content__price__money">$47.00</div>
                                    <div class="product__item__content__price__separate"></div>
                                    <div class="product__item__content__price__stock">In Stock</div>
                                </div>
                                <div class="product__item__content__choose">
                                    <div class="product__item__content__choose__brand">abc brand</div>
                                    <div class="product__item__content__choose__count">
                                    <button class="product__item__content__choose__count_minus" @click="countMinus">-</button>   
                                        {{ count }}
                                    <button class="product__item__content__choose__count__plus" @click="countPlus">+</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product__item__realPrice">
                            <div class="product__item__realPrice__price">$47.00</div>
                            <div class="product__item__realPrice__button">
                                <div class="product__item__realPrice__button__save">
                                    <img src="../assets/icons/save.svg" alt="" class="product__item__realPrice__button__save__img">Save
                                </div>
                                <div class="product__item__realPrice__button__delete">
                                    <img src="../assets/icons/Delete.svg" alt="" class="product__item__realPrice__button__delete__img">Delete
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="product__separate"></li>
                    <li class="product__item">
                        <div class="product__item__desc">
                            <img src="../assets/products/product-1.svg" alt="" class="product__item__image">
                            <div class="product__item__content">
                                <div class="product__item__content__name">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                                <div class="product__item__content__price">
                                    <div class="product__item__content__price__money">$47.00</div>
                                    <div class="product__item__content__price__separate"></div>
                                    <div class="product__item__content__price__stock">In Stock</div>
                                </div>
                                <div class="product__item__content__choose">
                                    <div class="product__item__content__choose__brand">abc brand</div>
                                    <div class="product__item__content__choose__count">
                                    <button class="product__item__content__choose__count_minus" @click="countMinus">-</button>   
                                        {{ count }}
                                    <button class="product__item__content__choose__count__plus" @click="countPlus">+</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product__item__realPrice">
                            <div class="product__item__realPrice__price">$47.00</div>
                            <div class="product__item__realPrice__button">
                                <div class="product__item__realPrice__button__save">
                                    <img src="../assets/icons/save.svg" alt="" class="product__item__realPrice__button__save__img">Save
                                </div>
                                <div class="product__item__realPrice__button__delete">
                                    <img src="../assets/icons/Delete.svg" alt="" class="product__item__realPrice__button__delete__img">Delete
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="product__separate"></li>
                    <li class="product__totalPrice">
                        <button class="product__totalPrice__return">
                            <img src="../assets/icons/arrowleft.svg" alt="">Continue Shopping
                        </button>
                        <div class="product__totalPrice__checkout">
                            <div class="product__totalPrice__checkout__subtotal">
                                <div class="product__totalPrice__checkout__subtotal__heading">Subtotal:</div>
                                <div class="product__totalPrice__checkout__subtotal__money">$191.65</div>
                            </div>
                            <div class="product__totalPrice__checkout__shipping">
                                <div class="product__totalPrice__checkout__shipping__heading">Shipping:</div>
                                <div class="product__totalPrice__checkout__shipping__money">$10:00</div>
                            </div>
                            <div class="product__totalPrice__checkout__separate"></div>
                            <div class="product__totalPrice__checkout__total">
                                <div class="product__totalPrice__checkout__total__heading">Total:</div>
                                <div class="product__totalPrice__checkout__total__money">$201.65</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="checkout__pay">
                <div class="checkout__pay__subtotal">
                    <div class="checkout__pay__subtotal__heading"><span>Subtotal</span> (items)</div>
                    <div class="checkout__pay__subtotal__money">3</div>
                </div>
                <div class="checkout__pay__price">
                    <div class="checkout__pay__subtotal__heading"><span>Price</span> (Total)</div>
                    <div class="checkout__pay__subtotal__money">$191.65</div>
                </div>
                <div class="checkout__pay__shipping">
                    <div class="checkout__pay__subtotal__heading">Shipping</div>
                    <div class="checkout__pay__subtotal__money">$10.00</div>
                </div>
                <div class="checkout__pay__separate"></div>
                <div class="checkout__pay__estimateTotal">
                    <div class="checkout__pay__subtotal__heading">Estimated Total</div>
                    <div class="checkout__pay__subtotal__money">$201.65</div>
                </div>
                <div class="checkout__pay__button">
                    <button class="checkout__pay__button__checkout">Continue to checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>



<style lang="scss" scoped>
.checkout{
    &__nav{
        display: flex;
        margin-top: 30px;
        gap: 30px;
    }
    &__pay{
        width: 30%;
        padding: 30px;
        background-color: #fff;
        border-radius: 20px;
        &__subtotal{
            display: flex;
        }
        &__price{
            display: flex;
        }
        &__shipping{
            display: flex;
        }
        &__estimateTotal{
            display: flex;
        }
    }
    &__product{
        width: 70%;
        background-color: #fff;
        border-radius: 20px;
        .product__list{
            display: flex;
            flex-direction: column;
            .product__separate{
                width: calc(100% - 60px);
                display: flex;
                margin: 0 auto;
                height: 1px;
                background-color: #1A162E;
                color:#1A162E;
                opacity: 0.5;
            }
            .product__totalPrice{
                display: flex;
                justify-content: space-between;
                padding: 30px;
                &__checkout{
                    width: 25%;
                    &__separate{
                        width: 100%;
                        height: 1px;
                        background-color: #1A162E;
                        opacity: 0.4;
                        margin: 30px 0;
                    }
                    &__subtotal{
                        display: flex;
                        justify-content: space-between;
                        font-size: 1.8rem;
                        font-weight: 500;
                        margin-bottom: 10px;
                    }
                    &__shipping{
                        display: flex;
                        font-size: 1.8rem;
                        font-weight: 500;
                        justify-content: space-between;
                    }
                    &__total{
                        display: flex;
                        justify-content: space-between;
                        font-size: 2.2rem;
                        font-weight: 700;
                    }
                }
                &__return{
                    align-self: flex-end;
                    border: none;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: #1A162E;
                    font-size: 1.8rem;
                    font-weight: 500;
                    cursor: pointer;
                }
            }
        }
        .product__item{
            padding: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__realPrice{
                display: flex;
                flex-direction: column;
                gap: 60px;
                &__price{
                    font-size: 2.2rem;
                    font-weight: 700;
                    align-self: flex-end;
                }
                &__button{
                    display: flex;
                    gap: 30px;
                    cursor: pointer;
                    &__save{
                        display: flex;
                        align-items: center;
                        &__img{
                            margin-right:8px;
                        }
                    }
                    &__delete{
                        display: flex;
                        align-items: center;
                        &__img{
                            margin-right: 8px;
                        }
                    }
                }
            }
            &__content{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                &__choose{
                    display: flex;
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: #1A162E;
                    &__brand{
                        padding: 10px 20px;
                    }
                    &__count{
                        padding: 10px 20px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        &__minus{
                            width: 20px;
                            height: 20px;
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            justify-content: center;
                        }
                        &__plus{
                            cursor: pointer;
                            width: 20px;
                            height: 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }
                &__name{
                    font-size: 1.8rem;
                    font-weight: 500;
                    color: #1A162E;
                }
                &__price{
                    display: flex;
                    align-items: center;
                    &__separate{
                    width: 1px;
                    height: 20px;
                    background-color:#1A162E;
                    margin: 0 10px;
                    opacity: 0.2;
                    }
                    &__money{
                        color: #9E9DA8;
                        font-size: 1.8rem;
                        font-weight: 500;
                    }
                    &__stock{
                        color: greenyellow;
                        font-size: 1.8rem;
                        font-weight: 500;
                    }
                }

            }
            &__desc{
                display: flex;
            }
            &__image{
                width: 20%;
            }
        }
    }
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
            font-size: 1.6rem;
            font-weight: 500;
            color: #9E9DA8;
            gap: 10px;
            &:hover{
                color:#1A162E;
            }

            }
            &__icon{
                width: 5%;
            }
            .active{
                color:#1A162E;
            }
        }

    }
}
</style>