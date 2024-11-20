<script setup>
import logo from '@/components/logo.vue';
import DropdownDepartments from '@/components/dropdownDepartments.vue';
import DropdownGrocery from '@/components/dropdownGrocery.vue';
import DropdownBeauty from '@/components/dropdownBeauty.vue';
</script>
<template>
    <header id="header">
        <div class="container">
            <div class="top-bar">
                <!--Logo-->
                <logo/>
                <!--Navbar-->
                <nav class="navbar">
                    <ul class="navbar__list">
                        <li class="navbar__item">
                            <a href="" class="navbar__link">Departments<img src="../assets/icons/arrow-down.svg" alt="" class="navbar__arrow icon"></a>
                            <DropdownDepartments/>
                        </li>
                        <li class="navbar__item">
                            <a href="" class="navbar__link">Grocery<img src="../assets/icons/arrow-down.svg" alt="" class="navbar__arrow icon"></a>
                            <DropdownGrocery/>
                        </li>
                        <li class="navbar__item">
                            <a href="" class="navbar__link">Beauty<img src="../assets/icons/arrow-down.svg" alt="" class="navbar__arrow icon"></a>
                            <DropdownBeauty/>
                        </li>
                    </ul>
                </nav>

                <!--Actions-->
                <div class="top-act">
                    <div class="top-act__group">
                        <button class="top-act__btn">
                            <img src="../assets/icons/search.svg" alt="top-act__icon" class="top-act__icon icon">
                            <!-- <span class="top-act__title"></span> -->
                        </button>
                    </div>

                    <div class="top-act__group">
                        <button class="top-act__btn">
                            <img src="../assets/icons/heart.svg" alt="" class="top-act__icon icon">
                            <span class="top-act_title">03</span>
                        </button>
                        <div class="top-act__separate"></div>
                        <button class="top-act__btn">
                            <img src="../assets/icons/cart.svg" alt="" class="top-act__icon icon">
                            <span class="top-act_title">$65.42</span>
                        </button>
                    </div>
                    <div class="top-act__user">
                        <img src="../assets/user.jpg" alt="" class="top-act__avatar">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>



<style lang="scss" scoped>
#header{
    background:#eee;
    padding: 25px;
}
.top-bar{
    display: flex;
    align-items: center;
    position: relative;
    .navbar{
       margin-left: 144px;
       margin-right: auto;
       &__list{
        display: flex;
        align-items: center;
       }
       &__item:hover .dropdown{
        display: block;
       }
       &__link{
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.2;
        text-align: left;
        display: flex;
        align-items: center;
        height: 50px;
        padding: 15px;
    }
    //    &__link:nth-child(2n){
    //     padding: 15px;
    //    }
       &__arrow{
        margin-left: 5px;
       }
    }
    .top-act{
        display: flex;
        align-items: center;
        gap: 20px;
        &__group{
            display: flex;
            align-items: center;
        }
        &__group{  
            border-radius: 8px;
            background: #fff;
            min-width: 50px;
            height: 50px;
        }
        &__btn{
            border: none;
            outline:none;
            padding: 13px;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            cursor: pointer;
            gap: 10px;
            border-radius: 8px;
        }
        &__title{
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 2.2;
        }
        &__separate{
            width: 1px;
            height: 30px;
            background-color: #eee;
        }
        &__avatar{
            width: 50px;
            height: 50px;
            border-radius: 8px;
            cursor: pointer;
        }

    }
}
</style>