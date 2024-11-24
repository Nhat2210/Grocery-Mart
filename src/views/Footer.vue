<script setup>

</script>
<template>
<div class="container">
    <footer class="footer">
        <ul class="footer__list">
            <!--Item 1-->
            <li class="footer__item">
                <div href="" class="footer__link">
                    <div class="footer__item__heading">
                        <img src="../assets/Icon.svg" alt="" class="footer__item__img">
                        <h3 class="footer__item__title">GroceryMart</h3>
                    </div>
                    <div class="footer__content">
                        <ul class="footer__content__list">
                            <li class="footer__content__desc">My groceryMart is number one!!!!</li>
                            <li class="footer__content__sendEmail">
                                <h4 class="sendEmail__title">Receive product news and updates</h4>
                                <div class="sendEmail__input">
                                    <input type="text" class="item__input" placeholder="Email address ...">
                                    <button class="item__button">SEND</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <!--Item 2-->
            <li class="footer__item">
                <a href="" class="footer__link">
                    <div class="footer__item__heading">
                        <h3 class="footer__item__title">Shop</h3>
                    </div>
                    <div class="footer__content">
                        <ul class="footer__content__list">
                            <li class="footer__content__item">All Departments</li>
                            <li class="footer__content__item">Fashion Deals</li>
                            <li class="footer__content__item">Electronic Discounts</li>
                            <li class="footer__content__item">Home & Living Specials</li>
                            <li class="footer__content__item">Beauty Bargains</li>
                        </ul>
                    </div>
                </a>
            </li>
            <!--Item 3-->
            <li class="footer__item">
                <a href="" class="footer__link">
                    <div class="footer__item__heading">
                        <h3 class="footer__item__title">Support</h3>
                    </div>
                    <div class="footer__content">
                        <ul class="footer__content__list">
                            <li class="footer__content__item">Store Locator</li>
                            <li class="footer__content__item">Order status</li>
                        </ul>
                    </div>
                </a>
            </li>
            <!--Item 4-->
            <li class="footer__item">
                <a href="" class="footer__link">
                    <div class="footer__item__heading">
                        <h3 class="footer__item__title">Company</h3>
                    </div>
                    <div class="footer__content">
                        <ul class="footer__content__list">
                            <li class="footer__content__item">Customer Service</li>
                            <li class="footer__content__item">Terms of Use</li>
                            <li class="footer__content__item">Privacy</li>
                            <li class="footer__content__item">Careers</li>
                            <li class="footer__content__item">About</li>
                            <li class="footer__content__item">Affiliates</li>
                        </ul>
                    </div>
                </a>
            </li>
            <!--Item 5-->
            <li class="footer__item">
                <a href="" class="footer__link">
                    <div class="footer__item__heading">
                        <h3 class="footer__item__title">Contact</h3>
                    </div>
                    <div class="footer__contact">
                        <ul class="footer__contact__list">
                            <li class="footer__contact__item">
                                <h4 class="footer__contact__item__title">Email</h4>
                                <p class="footer__contact__item__content">anhnhat22102003@gmail.com</p>
                            </li>
                            <li class="footer__contact__item">
                                <h4 class="footer__contact__item__title">Hotline</h4>
                                <p class="footer__contact__item__content">0378342817</p>
                            </li>
                            <li class="footer__contact__item">
                                <h4 class="footer__contact__item__title">Address</h4>
                                <p class="footer__contact__item__content">Ly Nhan District, Ha Nam Province</p>
                            </li>
                            <li class="footer__contact__item">
                                <h4 class="footer__contact__item__title">Hours</h4>
                                <p class="footer__contact__item__content">8:00pm - 4:00am</p>
                            </li>
                        </ul>
                    </div>
                </a>
            </li>
        </ul>
    </footer>
</div>
</template>



<style lang="scss" scoped>
.footer{
    margin-top: 40px;
    padding: 30px 50px;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    &__list{
        display: flex;
        justify-content: space-between;
    }
    &__item{
        width: 18%;
        &__title{
            font-weight: 500;
            font-size: 1.7rem;
        }
        &__heading{
            height: 50px;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        &__img{
            width: 15%;
        }
    }
    &__content{
        font-weight: 500;
        font-size: 1.3rem;
        &__list{
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &__sendEmail{
            margin-top: 35px;
            .sendEmail__title{
                margin-bottom: 7px;
            }
            .sendEmail__input{
                display: flex;
                .item__input{
                    width: 60%;
                    padding: 5px 8px;
                    border: 2px solid #fff;
                    border-radius: 3px;
                    background-color: #000;
                }
                .item__button{
                    border: none;
                    border-radius: 3px;
                    margin-left: 5px;
                    background-color: rgb(97, 189, 223);
                    font-size: 1rem;
                    font-weight: 500;
                    padding: 5px 8px;
                    cursor: pointer;
                    &:hover{
                        background-color: rgb(45, 157, 198);
                    }
                }
            }
        }
    }
    &__contact{
        &__list{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &__item{
            font-size: 1.3rem;
            &__title{
                font-size: 1.4rem;
                font-weight: 500;
                margin-bottom: 5px;
            }
            &__content{
                line-height: 1.2;
            }
        }
    }
}
</style>