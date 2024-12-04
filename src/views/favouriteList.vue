<script setup>
import Header from '@/components/Header.vue';
import { NCheckbox,NSelect } from 'naive-ui';
import { ref } from 'vue';

const count = ref(1);
const minus = () => {
    if(count.value < 1){
        //delete item
    }
    else{
        count --;
    }
};
const plus = () => {
    count.value++;
}
const options = [
    {
        label:"Trung Nguyen",
        value: "Trung Nguyen"
    },
    {
        label: "G7",
        value: "G7"
    }
]
</script>
<template>
    <Header/>
<div class="container">
<div class="favourite">
    <div class="favourite__menu">
        <ul class="favourite__list">
            <li class="favourite__item">Home <img src="../assets/icons/arrow-right.svg" alt="" class="favourite__icon"></li>
            <li class="favourite__item active">Favourite</li>
        </ul>
    </div>
    <div class="favourite__productList">
        <div class="Heading">Favourite List</div>
        <div class="numberItem">3 Items</div>
        <n-checkbox v-model:checked="value" class="chooseAll">
        Choose All
        </n-checkbox>
        <div class="favourite__productItem">
            <div class="left">
                <div class="product">
                    <n-checkbox v-model:checked="value" class="product__checkbox"></n-checkbox>
                    <img src="../assets/products/product-1.svg" alt="" class="product__img">
                    <div class="product__content">
                        <div class="title">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                        <div class="price">
                            <div class="price__money">$47</div>
                            <div class="price__separate"></div>
                            <div class="price__stock">In Stock</div>
                        </div>
                        <div class="button">
                            <div class="brand">
                                <n-select v-model:value="value" :options="options" />
                            </div>
                            <div class="count">
                                <div class="minus">-</div>
                                <div class="number">{{ count }}</div>
                                <div class="plus">+</div>
                            </div>
                            <div class="save">
                                <i class="fa-solid fa-heart"></i>
                                Save
                            </div>
                            <div class="delete">
                                <i class="fa-solid fa-delete-left"></i>
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="money">$47.00</div>
                <button class="btn__checkout">Check Out</button>
            </div>
        </div>
        <div class="favourite__separate"></div>
        <div class="favourite__productItem">
            <div class="left">
                <div class="product">
                    <n-checkbox v-model:checked="value" class="product__checkbox"></n-checkbox>
                    <img src="../assets/products/product-1.svg" alt="" class="product__img">
                    <div class="product__content">
                        <div class="title">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                        <div class="price">
                            <div class="price__money">$47</div>
                            <div class="price__separate"></div>
                            <div class="price__stock">In Stock</div>
                        </div>
                        <div class="button">
                            <div class="brand">
                                <n-select v-model:value="value" :options="options" />
                            </div>
                            <div class="count">
                                <div class="minus">-</div>
                                <div class="number">{{ count }}</div>
                                <div class="plus">+</div>
                            </div>
                            <div class="save">
                                <i class="fa-solid fa-heart"></i>
                                Save
                            </div>
                            <div class="delete">
                                <i class="fa-solid fa-delete-left"></i>
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="money">$47.00</div>
                <button class="btn__checkout">Check Out</button>
            </div>
        </div>
        <div class="favourite__separate"></div>
        <div class="favourite__productItem">
            <div class="left">
                <div class="product">
                    <n-checkbox v-model:checked="value" class="product__checkbox"></n-checkbox>
                    <img src="../assets/products/product-1.svg" alt="" class="product__img">
                    <div class="product__content">
                        <div class="title">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                        <div class="price">
                            <div class="price__money">$47</div>
                            <div class="price__separate"></div>
                            <div class="price__stock">In Stock</div>
                        </div>
                        <div class="button">
                            <div class="brand">
                                <n-select v-model:value="value" :options="options" />
                            </div>
                            <div class="count">
                                <div class="minus">-</div>
                                <div class="number">{{ count }}</div>
                                <div class="plus">+</div>
                            </div>
                            <div class="save">
                                <i class="fa-solid fa-heart"></i>
                                Save
                            </div>
                            <div class="delete">
                                <i class="fa-solid fa-delete-left"></i>
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="money">$47.00</div>
                <button class="btn__checkout">Check Out</button>
            </div>
        </div>
        <div class="favourite__separate"></div>
        <div class="allCheckOut">
            <div class="return">
                <img src="../assets/icons/arrowleft.svg" alt="" class="return__img">
                <div class="return__content">Continue Shopping</div>
            </div>
            <div class="checkout__btn">All Check Out</div>
        </div>
    </div>
</div>
</div>
</template>


<style lang="scss" scoped>
.container{
    margin-top: 30px;
}
.favourite{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.favourite__separate{
    width: 100%;
    background-color:#1A162E;
    height: 1px;
    opacity: 0.3;
    margin: 30px 0;
}
.favourite__list{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    .favourite__item{
        display: flex;
        align-items: center;
    }
    .active{
        color:#1A162E;
        font-size: 1.6rem;
        font-weight: 500;
    }
    .favourite__icon{
        margin-left: 10px;
    }

}
.favourite__productList{
    background-color: #fff;
    padding: 30px;
    border-radius: 20px;
    .Heading{
        font-weight: 500;
        font-size: 2.2rem;
        margin-bottom: 6px;
    }
    .numberItem{
        margin-bottom: 30px;
        font-size: 1.4rem;
        font-weight: 400;
    }
    .chooseAll{
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 30px;
    }

    .favourite__productItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
            display: flex;
            flex-direction: column;
            gap: 110px;
            .money{
                align-self: flex-end;
                font-size: 2.2rem;
                font-weight: 600;
                color:#1A162E;
            }
            .btn__checkout{
                border:none;
                background:#FFB700;
                border-radius: 999px;
                padding: 18px 40px;
                cursor: pointer;
                font-size: 2.2rem;
                font-weight: 500;
            }
        }
        .product{
            display: flex;
            gap: 30px;
            .title{
                font-size: 2.2rem;
                font-weight: 500;
            }
            &__img{
                width: 20%;
            }
            &__content{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 15px;
            }
            .price{
                display: flex;
                align-items: center;
                &__money{
                     font-size: 1.8rem;
                     font-weight: 500;
                }
                &__separate{
                    width: 2px;
                    height: 15px;
                    background-color:#1A162E;
                    margin: 0 10px;
                    opacity: 0.2;
                }
                &__stock{
                    font-size: 1.8rem;
                    font-weight: 500;
                    color: greenyellow;
                }
            }
            .button{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .brand{
                    width: 25%;
                }
                .count{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    .minus{
                        padding: 2px 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #1A162E;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    .plus{
                        padding: 2px 5px;
                        display: flex;
                        border: 1px solid #1A162E;
                        border-radius: 5px;
                        cursor: pointer;
                        align-items: center;
                        justify-content: center;
                    }
                }
                .save{
                    cursor: pointer;
                    color:#9E9DA8;
                    font-size: 1.6rem;
                    font-weight: 500;
                    i{
                        margin-right: 10px;
                    }
                }
                .delete{
                    cursor: pointer;
                    color:#9E9DA8;
                    font-size: 1.6rem;
                    font-weight: 500;
                    i{
                        margin-right: 10px;
                    }
                }
            }
        }

    }
}
.allCheckOut{
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .return{
        display: flex;
        width: 30%;
        align-items: center;
        gap: 8px;
        &__img{
            width: 4%;
        }
        &__content{
            font-size: 1.8rem;
            font-weight: 500;
        }
    }
    .checkout__btn{
        font-size: 2rem;
        font-weight: 500;
        padding: 22px 40px;
        background-color: #FFB700;
        border-radius: 999px
    }
}
</style>