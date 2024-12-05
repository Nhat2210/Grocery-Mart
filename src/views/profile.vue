<template>
<Header/>
<div class="container">
    <div class="profile">
        <div class="account">
            <div class="account__avatar">
                <img src="../assets/bg.webp" alt="" class="img">
                <div class="name">Imran Khan</div>
                <div class="registered">Registered: 5th December 2024</div>
            </div>
            <div class="account__infor"></div>
        </div>
        <ul class="listInfor">
            <li class="itemInfor">
                <h3 class="heading">Manage Account</h3>
                <div class="infor">
                    <div class="item">
                        <img src="../assets/user/profile.svg" class="icon">
                        <div class="content">Personal info</div>
                    </div>
                    <div class="item">
                        <img src="../assets/user/location.svg" class="icon">
                        <div class="content">Addresses</div>
                    </div>
                    <div class="item">
                        <img src="../assets/user/message.svg" class="icon">
                        <div class="content">Communications & privacy</div>
                    </div>
                </div>
            </li>
            <li class="itemInfor">
                <h3 class="heading">My items</h3>
                <div class="infor">
                    <div class="item">
                        <img src="../assets/user/downlaod.svg" class="icon"></img>
                        <div class="content">Reorder</div>
                    </div>
                    <div class="item">
                        <img src="../assets/user/item2.svg" class="icon"></img>
                        <div class="content">Lists</div>
                    </div>
                    <div class="item">
                        <img src="../assets/user/item3.svg" class="icon"></img>
                        <div class="content">Registries</div>
                    </div>
                </div>
            </li>
            <li class="itemInfor">
                <h3 class="heading">Subscriptions & plans</h3>
                <div class="infor">
                    <div class="item">
                        <img src="../assets/user/plan.svg" class="icon"></img>
                        <div class="content">Protection plans</div>
                    </div>
                </div>
            </li>
            <li class="itemInfor">
                <h3 class="heading">Customer Service</h3>
                <div class="infor">
                    <div class="item">
                        <img src="../assets/user/sv1.svg" class="icon"></img>
                        <div class="content">Help</div>
                    </div>
                    <div class="item">
                        <img src="../assets/user/sv2.svg" class="icon"></img>
                        <div class="content">Terms of Use</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="myWallet">
        <div class="Wallet">
            <div class="heading">My Wallet</div>
            <div class="desc">payment methods</div>
            <div class="infor">
                <img src="../assets/user/card1.svg" alt="" class="card">
                <img src="../assets/user/card2.svg" alt="" class="card">
                <div class="newcard">
                    <n-upload
                        class="card"
                        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                        :headers="{
                        'naive-info': 'hello!',
                        }"
                        :data="{
                        'naive-data': 'cool! naive!',
                        }"
                    >
                        <n-button>Upload File</n-button>
                    </n-upload>
                </div>
            </div>
        </div>
        <div class="Account">
            <div class="heading">Account infor</div>
            <div class="desc">Addresses, contact information and password</div>
            <div class="inforList">
                <div class="inforItem">
                    <img src="../assets/user/message.svg" alt="" class="img">
                    <div class="content">
                        <div class="emailTitle">Email Address</div>
                        <div class="email">tarek97.ta@gmail.com</div>
                    </div>
                </div>
                <div class="inforItem">
                    <img src="../assets/user/calling.svg" alt="" class="img">
                    <div class="content">
                        <div class="emailTitle">Email Address</div>
                        <div class="email">tarek97.ta@gmail.com</div>
                    </div>
                </div>
                <div class="inforItem">
                    <img src="../assets/user/location.svg" alt="" class="img">
                    <div class="content">
                        <div class="emailTitle">Email Address</div>
                        <div class="email">tarek97.ta@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="List">
            <div class="heading">Lists</div>
            <div class="desc">2 items - Primary</div>
            <div class="productList">
                <div class="productItem">
                    <img src="../assets/products/product-1.svg" alt="" class="img">
                    <div class="content">
                        <div class="title">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                        <div class="checkout">
                            <div class="checkout__price">$47.00</div>
                            <div class="checkout__button">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div class="productItem">
                    <img src="../assets/products/product-2.svg" alt="" class="img">
                    <div class="content">
                        <div class="title">Coffee Beans - Espresso Arabica and Robusta Beans</div>
                        <div class="checkout">
                            <div class="checkout__price">$47.00</div>
                            <div class="checkout__button">Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { NButton, NUpload } from 'naive-ui';
</script>

<style lang="scss" scoped>
.container{
    background-color: #f6f6f6;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
}

.myWallet{
    width: 70%;
    border-radius: 20px;
    background-color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .heading{
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .desc{
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 20px;
    }
    .infor{
        display: flex;
        gap: 10px;
        img{
            width: 250px;
            height: 160px;
        }
        .newcard{
            width: 248px;
            height: 158px; 
            border: 1px dashed #1A162E;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .n-upload{
                width: auto;
            }
        }
    }
    .Account{
        .inforList{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            .inforItem{
                padding: 10px;
                display: flex;
                align-items: center;
                background-color: #f6f6f6;
                border-radius: 10px;
                width: 45%;
                margin-bottom: 20px;
                gap: 15px;
                &:last-child{
                    margin-bottom: 0;
                }
                img{
                    padding: 15px;
                    background-color: #fff;
                    border-radius: 10px;
                }
                .content{
                    .emailTitle{
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                    .email{
                        font-size: 1.4rem;
                        font-weight: 400;
                    }
                }
            }
        }
    }
    .List{
        .productList{
            display: flex;
            flex-direction: column;
            gap: 15px;
            .productItem{
                display: flex;
                align-items: center;
                .title{
                    font-size: 1.5rem;
                    font-weight: 500;
                    margin-bottom: 10px;
                }
                .img{
                    width: 10%;
                }
                .checkout{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    &__price{
                        font-size: 2.2rem;
                        font-weight: 500;
                    }
                    &__button{
                        padding: 10px 20px;
                        background-color: #FFB700;
                        border-radius: 999px;
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                }
            }
        }
    }
}
.profile{

    background-color: #fff;
    width: 25%;
    border-radius: 20px;
    padding: 30px;
}
.account{
    &__avatar{
        margin-bottom: 30px;
        .name{
            text-align: center;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 5px;
        }
        .registered{
            text-align: center;
            font-size: 1.5rem;
            font-weight: 500;
        }
        .img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto;
            display: block;
        }
    }
}
.listInfor{
    display: flex;
    flex-direction: column;
    gap: 30px;
    .itemInfor{
        display: flex;
        flex-direction: column;
        .infor{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .heading{
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .item{
            display: flex;
            align-items: center;
            gap: 7px;
            img{
                width: 5%;
            }
            .content{
                font-size: 1.5rem;
                font-weight: 400;
            }
        }
    }
}
</style>