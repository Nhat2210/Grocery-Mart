<script setup>
import { ref } from 'vue';
import { NSpace, NSlider, NInputNumber, NSelect, NInputGroup, NButton, NInput } from 'naive-ui';


//show modal filter 
const showModal = ref(false);
const toggleModal = () => {
    showModal.value = !showModal.value;
}
//close modal filter
const closeModal = () => {
    showModal.value = false;
}

//set value for slider
const value = ref([0,100]);

//set option select
const choice = ref(null);
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
    <div class="Total-product">
        <div class="Total-product__title">
            <h2 class="Total-product__heading">Total LavAzza 1320</h2>
            <button class="filter-btn" @click="toggleModal()">
                Filter
                <img src="../assets/icons/filter.svg" alt="" class="filter-btn__icon">
            </button>
        </div>
        
        <!--Modal-->
        <div class="filter" v-if="showModal">
            <h3 class="filter__heading">Filter</h3>
            <form action="" class="filter__form">
                <div class="filter__row">
                    <!--Filter column 1-->
                    <div class="filter__column">
                        <h3 class="filter__column__heading">Price</h3>
                        <div class="slider">
                            <n-space vertical>
                                <div class="slider__bar">
                                    <n-slider v-model:value="value" range :step="1" />
                                </div>
                                <n-space>
                                    <div class="filter__minmax">
                                        <div class="min-value">
                                            <p class="min-value__title">Minimum</p>
                                            <n-input-number v-model:value="value[0]" size="small" />
                                        </div>
                                        <div class="max-value">
                                            <p class="max-value__title">Maximum</p>
                                            <n-input-number v-model:value="value[1]" size="small" />
                                        </div>
                                    </div>
                                </n-space>
                            </n-space>
                        </div>
                    </div>
                    <div class="filter__separate"></div>
                    <!--Filter column 2-->
                    <div class="filter__column">
                        <h3 class="filter__column__heading">Size/Weight</h3>
                        <div class="sizeweight">
                            <div class="filter__column__select">
                                <n-space vertical>
                                    <n-select v-model:value="choice" :options="options" />
                                </n-space>
                            </div>
                            <ul class="filter__column__list">
                                <li class="filter__column__item">Small</li>
                                <li class="filter__column__item">Medium</li>
                                <li class="filter__column__item">Large</li>
                            </ul>
                        </div>
                    </div>
                    <div class="filter__separate"></div>
                    <!--Filter column 3-->
                    <div class="filter__column">
                        <h3 class="filter__column__heading">Price</h3>
                        <div class="filter__column__brand">
                            <n-input-group>
                                <n-input :style="{ width: '90%' }" />
                                <n-button type="primary" ghost>
                                    Search
                                </n-button>
                            </n-input-group>
                        </div>
                        <ul class="filter__column__list">
                            <li class="filter__column__item">Lavazza</li>
                            <li class="filter__column__item">Nescafe</li>
                            <li class="filter__column__item">Starbucks</li>
                        </ul>
                    </div>
                </div>
                <div class="filter__button">
                    <button class="filter__button__cancel" @click="closeModal">Cancel</button>
                    <button class="filter__button__showResult">Show Result</button>
                </div>
            </form>
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
    position: relative;
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
        gap: 30px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
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



// css filter
.filter{
    padding: 30px;
    background: hsl(0, 0%, 87%);
    border-radius: 20px;
    position: relative;
    z-index: 999;
    position: absolute;
    top: 13%;
    width: 100%;
    &__heading{
        font-weight: 500;
        font-size: 2.2rem; 
        margin-bottom: 30px;
    }
    &::before{
        content: url('../assets/icons/dropdown-arrow.svg');
        position: absolute;
        top: -15px;
        right: 30px;
    }
    &__row{
        display: flex;
        justify-content: space-between;
    }
    &__column{
        width: 28%;
        &__heading{
            font-weight: 500;
            font-size: 2.2rem;
            margin-bottom: 20px;
        }
        &__select{
            margin-bottom: 25px;
        }
        &__brand{
            margin-bottom: 25px;
        }
        &__list{
            display: flex;
            justify-content: space-between;
        }
        &__item{
            padding: 5px 10px;
            background-color: #bab9cb;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:hover{
                background: #dcdce2;
            }
        }
    }
    .slider__bar{
        margin-bottom: 10px;
    }
    &__minmax{
        display: flex;
        gap: 25px;
        .min-value{
            font-weight: 500;
            font-size: 1.4rem;
            &__title{
                margin-bottom: 10px;
            }
        }
        .max-value{
            font-weight: 500;
            font-size: 1.4rem;
            &__title{
                margin-bottom: 10px;
            }
        }
    }
    &__separate{
        width: 1px;
        height: 150px;
        background-color: #9E9DA8;
        align-self: center;
        opacity: 0.2;
    }
    &__button{
        justify-self: end;     
        &__cancel{
            border: none;
            background-color: #ededf5;
            padding: 8px 8px;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                background-color: rgb(230, 82, 82);
                color: #fff;
            }
        }
        &__showResult{
            border:none;
            background-color: #ffd468;
            padding: 9px 10px;
            border-radius: 5px;
            margin-left: 15px;
            cursor: pointer;
            &:hover{
                background-color: #FFB700;
                color: #fff;
            }
        }
    }
}
</style>