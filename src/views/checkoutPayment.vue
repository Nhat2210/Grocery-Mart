
<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';
const count = ref(1);
import { NDatePicker , NInput } from 'naive-ui';
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
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link">Home <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"></a></div>
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link">Checkout <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"> </a></div>
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link">Shipping <img src="../assets/icons/arrow-right.svg" alt="" class="product__menu__item__icon"> </a></div>
                <div class="checkout__menu__item"><a href="#!" class="checkout__menu__item__link active">Payment method</a></div>
            </div>
        </div>
        <div class="checkout__nav">
            <div class="checkout__list">
                <div class="checkout__item">
                    <div class="checkout__item__title">
                        <div class="checkout__item__heading">1. Shipping, arrives between Mon, May 16—Tue, May 24</div>
                        <div class="checkout__item__content">
                            <img class="checkout__item__edit" src="../assets/checkoutPayment/Edit.svg" alt="">Edit  
                        </div>
                    </div>
                    <div class="checkout__buyer">
                        <div class="checkout__infor">
                            <div class="infor">
                                <div class="infor__name">Imran Khan</div>
                                <div class="infor__desc">Museum of Rajas, Sylhet Sadar, Sylhet 3100.</div>
                            </div>
                            <input type="checkbox">
                        </div>
                        <div class="checkout__product">
                            <div class="product">
                                <div class="product__name">Items details</div>
                                <div class="product__desc">2 items</div>
                            </div>
                            <button class="product__view">View details</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__item">
                    <div class="checkout__item__heading">2. Shipping method</div>
                    <div class="checkout__item__separate"></div>
                    <div class="checkout__item__desc">Availeble Shipping method</div>
                    <div class="checkout__buyer">
                        <div class="checkout__product">
                            <div class="product">
                                <div class="product__name">DHL Delivery</div>
                                <div class="product__desc">Delivery: 2-3 days work</div>
                            </div>
                            <div class="checkbox"> Free <input type="checkbox"></div>
                        </div>
                        <div class="checkout__product">
                            <div class="product">
                                <div class="product__name">DHL Delivery</div>
                                <div class="product__desc">Delivery: 2-3 days work</div>
                            </div>
                            <div class="checkbox"> $12.00 <input type="checkbox"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkout__pay">
                <div class="heading">Payment Details</div>
                <div class="desc">Complete your purchase item by providing your payment details order.</div>
                <label for="Email">Email</label>
                <n-input v-model:value="value" type="text" placeholder="Email" />
                <label for="Card1">Card Holder</label> 
                <n-input v-model:value="value" type="text" placeholder="Card Holder" />
                <label for="Card2">Card Details</label> 
                <n-input v-model:value="value" type="text" placeholder="Card Detail" />
                <label for="">Date Picker</label>
                <n-date-picker v-model:value="timestamp" type="date" placeholder="Date Picker"/>
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
    &__buyer{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    &__infor{
        background-color: #F6F6F6;
        padding: 20px;
        border-radius: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .infor__name{
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 5px;
        }
        
    }
    .checkout__product{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 20px;
        background-color: #F6F6F6;
        width: 100%;
    }
    &__nav{
        display: flex;
        margin-top: 30px;
        gap: 30px;
    }
    &__list{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        .checkout__item{
            padding: 30px;
            background-color: #fff;
            border-radius: 20px;
            &__desc{
                font-size: 1.8rem;
                font-weight: 500;
                margin-bottom: 30px;
            }
            &__separate{
                width: 100%;
                background-color: #1A162E;
                opacity: 0.4;
                height: 1px;
                margin-bottom: 30px;
            }
            &__title{
                display: flex;
                justify-content: space-between;
            }
            &__content{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
                cursor: pointer;
            }
            &__heading{
                font-size: 2.2rem;
                font-weight: 500;
                margin-bottom: 30px;
            }
        }
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
        .product__name{
            color: #1A162E;
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 5px;
        }
        .product__view{
            border: none;
            background-color: #F6F6F6;
            cursor: pointer;
            &:hover{
                color:#1A162E;
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