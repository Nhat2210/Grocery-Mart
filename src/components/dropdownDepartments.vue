<template>
<div class="dropdown">
    <div class="dropdown__inner">
        <div class="top-menu">
            <div class="top-menu__main">
                <!--Menu column-->
                <div class="menu-column">
                    <div class="menu-column__icon">
                        <img src="../assets/icons/cate-1.1.svg" alt="" class="">
                    </div>
                    <div class="menu-column__content ">
                        <h2 class="menu-column__heading">All Departments</h2>
                        <ul class="menu-column__list">
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Savings & Featured Shops</a>
                                <!--Sub menu 1-->
                                <div class="sub-menu">
                                    <div class="sub-menu__column">
                                        <!-- Sub menu 1.1-->
                                        <div class="menu-column">
                                            <div class="menu-column__icon">
                                                <img src="../assets/icons/cate-1.2.svg" alt="" class="">
                                            </div>
                                            <div class="menu-column__content ">
                                                <h2 class="menu-column__heading">TV & Video</h2>
                                                <ul class="menu-column__list">
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Shop all TVs</a>
                                                    </li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">TVs by Size</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Smart TVs</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Roku TVs</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Streaming</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">TV Mounts & Accessories</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">DVD & Blu-Ray Players</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!--Sub menu 1.2-->
                                        <div class="menu-column">
                                            <div class="menu-column__icon">
                                                <img src="../assets/icons/cate-1.5.svg" alt="" class="">
                                            </div>
                                            <div class="menu-column__content ">
                                                <h2 class="menu-column__heading">Wearable Technology</h2>
                                                <ul class="menu-column__list">
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Galaxy Watch</a>
                                                    </li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Apple Watch</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Fitness Trackers</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Virtual Reality</a></li>
                                                    <li class="menu-column__item"><a href="#!" class="menu-column__link">Headphones</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Electronics</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Clothing, Shoes & Accessories</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Home, Furniture & Appliances</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Toys & Video Games</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Home Improvement</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Baby</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Household Essentials</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Personal Care</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Patio & Garden</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Sports & Outdoors</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Gift Cards</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Auto, Tires and Industrial</a></li>
                            <li class="menu-column__item"><a href="#!" class="menu-column__link">Movies, Music & Books</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.dropdown{
    position: absolute;
    left: 0;
    padding-top: 54px;
    // display: none;
    width: min(1240px, 100%);
    &__inner{
        min-height: 600px;
        position: relative;
        border-radius: 20px;
        background: #fff;
        padding: 30px;
        height: 582px;
        box-shadow: 0px 40px 90px 20px rgba(200, 200, 200, 0.4);
        &::before{
            content: url("../assets/icons/dropdown-arrow.svg");
            position: absolute;
            top:-13px;
            left: 380px;
        }
    }
}
.top-menu{
    max-height: inherit;
    position: relative;
    &__main{
        max-height: inherit;
        width: 292px;
        border-right: 1px solid #D2D1D6;
    }
}
.menu-column{
    display: flex;
    gap: 14px;
    &__heading{
        font-family: Gordita;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4;
    }
    &__list{
        margin-top: 13px;
    }
    &__link{
        display: block;
        font-family: Gordita;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.0;
        padding-top: 7px;
        padding-bottom: 7px;
    }
    &__link:first-child{
        padding-top: 0;
    }

    &__link:hover{
        color: #0071DC;
        font-weight: 500;
    }
}
.sub-menu{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 322px;
    right: 0;
    .menu-column:nth-child(2n){
        margin-top: 15px;
    }
}
</style>