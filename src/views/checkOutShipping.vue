
<script setup>
import Header from '@/components/Header.vue';
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
    <Header/>
    <div class="checkout">
        <div class="checkout__menu">
            <div class="checkout__menu__list">
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link">Home <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"> </a></div>
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link">Checkout <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"> </a></div>
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link active">Shipping</a></div>
            </div>
        </div>
        <div class="checkout__nav">
            <div class="checkout__product">
                <ul class="product__list">
                    <li class="product__heading">
                        1. Shipping, arrives between Mon, May 16—Tue, May 24
                    </li>
                    <li class="product__separate"></li>
                    <div class="product__shipping">
                        <div class="product__shipping__address">
                            <div class="product__shipping__address__title">
                                <div class="product__shipping__heading">Shipping address</div>
                                <div class="product__shipping__content">Where should we deliver your order?</div>
                            </div>
                            <div class="product__shipping__button">
                                <div class="product__shipping__button__icon">+</div>
                                Add a new address
                            </div>
                        </div>
                        <div class="product__shipping__address__list">
                            <div class="product__shipping__address__item">
                                <div class="product__shipping__address__item__content">
                                    <input type="checkbox" class="checkbox"></input>
                                    <div class="product__content">
                                        <div class="title">Imran Khan</div>
                                        <div class="content">Museum of Rajas, Sylhet Sadar, Sylhet 3100.</div>
                                        <ul class="address">
                                            <li class="address__item">Shopping</li>
                                            <li class="address__item">Deliver from store</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product__shipping__address__item__edit">
                                    <img src="" alt="" class="icon">
                                    Edit
                                </div>
                            </div>
                            <div class="product__shipping__address__item">
                                <div class="product__shipping__address__item__content">
                                    <input type="checkbox" class="checkbox"></input>
                                    <div class="product__content">
                                        <div class="title">Imran Khan</div>
                                        <div class="content">Al Hamra City (10th Floor), Hazrat Shahjalal Road, Sylhet, Sylhet, Bangladesh</div>
                                        <ul class="address">
                                            <li class="address__item">Shopping</li>
                                            <li class="address__item">Deliver from store</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product__shipping__address__item__edit">
                                    <img src="" alt="" class="icon">
                                    Edit
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="product__item__title">Items details</div>
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
                            Continue
                        </div>
                    </li>
                </ul>
            </div>
            <div class="checkout__pay">
                <div class="checkout__pay__subtotal">
                    <div class="checkout__pay__subtotal__heading">Subtotal <span>(items)</span> </div>
                    <div class="checkout__pay__subtotal__money">3</div>
                </div>
                <div class="checkout__pay__price">
                    <div class="checkout__pay__subtotal__heading">Price <span>(Total)</span></div>
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
            </div>
        </div>
    </div>
</div>
</template>



<style lang="scss" scoped>
.checkout{
    color:#1A162E;
    &__nav{
        display: flex;
        margin-top: 30px;
        gap: 30px;
    }
    &__pay{
        &__button__checkout{
            padding: 15px 30px;
            margin: 0 auto;
            display: block;
            border: none;
            background-color: #FFB700;
            border-radius: 999px;
            cursor: pointer;
            font-size: 1.8rem;
            font-weight: 500;
        }
        width: 30%;
        height: 100%;
        padding: 30px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        &__separate{
            width: 100%;
            height: 1px;
            background-color:#1A162E;
            opacity: 0.4;
        }
        &__subtotal{
            display: flex;
            justify-content: space-between;
            font-weight: 500;
            font-size: 1.6rem;
            span{
                font-weight: 400;
            }
        }
        &__price{
            justify-content: space-between;
            display: flex;
            font-weight: 500;
            span{
                font-weight: 400;
            }
        }
        &__shipping{
            font-weight: 500;
            display: flex;
            justify-content: space-between;
        }
        &__estimateTotal{
            font-weight: 500;
            justify-content: space-between;
            display: flex;
        }
    }
    &__product{
        width: 70%;
        background-color: #fff;
        border-radius: 20px;
        .product__item__title{
            padding: 30px;
            font-size: 1.8rem;
            font-weight: 500;
        }
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
                    font-size: 2rem;
                    font-weight: 500;
                    padding: 15px 30px;
                    background-color: #FFB700;
                    border-radius: 999px;
                    cursor: pointer;
                }
                &__return{
                    align-self: flex-end;
                    border: none;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    color: #1A162E;
                    font-size: 1.8rem;
                    font-weight: 500;
                    cursor: pointer;
                    gap:7px;
                }
            }
        }
        .product__heading{
            padding: 30px;
            font-weight: 700;
            font-size: 2.4rem;
        }
        .product__shipping{
            padding: 30px;
            &__address{
                margin-bottom: 30px;
                &__list{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                &__item{
                    display: flex;
                    justify-content: space-between;
                    &__content{
                        display: flex;
                        .product__content{
                            display: flex;
                            flex-direction: column;
                            gap: 5px;
                            .title{
                                font-size: 1.8rem;
                                font-weight: 500;
                            }
                            .content{
                                font-size: 1.4rem;
                                font-weight: 400;
                            }
                            .address{
                                display: flex;
                                margin-left: 20px;
                                gap: 30px;
                                li{
                                    list-style-type: disc;
                                    font-size: 1.4rem;
                                    font-weight: 400;
                                }
                            }
                        }
                        .checkbox{
                            align-self: flex-start;
                            margin-right: 10px;
                        }

                    }
                    &__edit{
                        align-self: flex-end;
                    }
                }
            }
            &__heading{
                font-size: 1.8rem;
                font-weight: 500;
                margin-bottom: 4px;
            }
            &__content{
                font-size: 1.5rem;
                font-weight: 400;
            }

            &__address{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            &__button{
                display: flex;
                gap: 15px;
                font-weight: 500;
                padding: 10px 20px;
                background-color: #FFB700;
                display: flex;
                align-items: center;
                border-radius: 999px;
                cursor: pointer;
                &__icon{
                    padding: 1px 4px;
                    border: 2px solid #1A162E;
                    color: #1A162E;
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
                justify-content: space-between;
                // gap: 15px;
                &__choose{
                    display: flex;
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: #1A162E;
                    &__brand{
                        margin-right: 20px
                    }
                    &__count{
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