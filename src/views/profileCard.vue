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
    <div class="creditCard">

    </div>
</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped>
.container{
    background-color: #f6f6f6;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
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