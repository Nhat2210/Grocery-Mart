<script setup>
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useMessage } from 'naive-ui';

const message = useMessage();
    
const {push} = useRouter()

const email = ref("");
const password = ref("");



//add validate
const validateEmail = () => {
  if (!email.value) {
    message.warning("Vui lòng nhập email!");
    return false;
  } else if (!/^[a-zA-Z0-9](\.?[a-zA-Z0-9])+@g(oogle)?mail\.com$/.test(email.value)) {
    message.warning("Định dạng email không hợp lệ!");
    return false;
  }
  return true;
};

const validatePassword = () => {
  if (!password.value) {
    message.warning("Vui lòng nhập mật khẩu");
    return false;
  } else if (password.value.length < 8) {
    message.warning("Mật khẩu phải có ít nhất 8 ký tự");
    return false;
  }
  return true;
};
// end validate

const handleLogin = async () => {
    if (!validateEmail() || !validatePassword()) {
        return;
    }
    try{
        const useCredential = await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );
        const user = useCredential.user;
        console.log("Đăng nhập thành công", user.email);
        message.success("Đăng nhập thành công!");
        localStorage.setItem("user",JSON.stringify(user));
        push("/");
    }
    catch(error){
        console.log("có lỗi :" ,error.message);
        message.warning("Lỗi: ", error.message);
    }

}
</script>
<template>
        <div class="signup">
        <div class="signup-left">
            <div class="signup-left__introduction">
                <img src="../assets/signup/signup.svg" alt="" class="signup-left__img">
                <p class="signup-left__desc">The best of luxury brand values, high quality products, and innovative services</p>
            </div>
        </div>
        <div class="signup-right">
            <a href="/" class="signup-right__logo">
                <img src="../assets/Icon.svg" alt="" class="signup-right__icon">
                <p class="signup-right__name">GroceryMart</p>
            </a>
            <h2 class="signup-right__heading">Hello Again</h2>
            <p class="signup-right__desc"> Welcome back to sign in. As a returning customer, you have access to your previously saved all information.</p>
            <input type="text" class="signup-right__input email" placeholder="Email"  v-model="email"><br>
            <input type="password" class="signup-right__input password" placeholder="Password"  v-model="password"><br>
            <div class="signup-right__confirm">
                <div class="signup-right__check">
                    <input type="checkbox">
                    <p class="signup-right__check__content">Set as default card</p>
                </div>
                <a href="#!" class="signup-right__check__recover">Recovery Password</a>
            </div>
            <button class="signupButton" @click="handleLogin">Sign Up</button>
            <button class="signinButton">
                <img src="../assets/signup/gg.svg" alt="" class="signinButton__icon">
                Sign in with Gmail
            </button>
            <div class="signup-right__signIn">
                Don't have an account yet ? <a href="/Signup" class="signup-right__signIn__link">Sign Up</a>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.signup{
    display: flex;
    height: 100vh;
}
.signup-left{
    width: 50%;
    background-color: #dddde6;
    display: flex;
    align-items: center;
    justify-content: center;
    &__introduction{
        width: 400px;
    }
    &__img{
        width: 70%;
        display: block;
        margin: 0 auto;
    }
    &__desc{
        margin-top: 50px;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.6;
    }
}
.signup-right{
    margin-top: 61px;
    width: 50%;
    text-align: center;
    padding: 20px 120px;

    &__logo{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 35px;
    }
    &__icon{
        width: 6%;
    }
    &__name{
        font-size: 2.2rem;
        font-weight: 700;
    }
    &__heading{
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 10px;
    }
    &__desc{
        font-weight: 500;
        font-size: 1.5rem;
        margin-bottom: 35px;
    }
    &__input{
        width: 100%;
        border: 2px solid #dddde6;
        padding: 10px 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        position: relative;
        &::before{
            content: 'dsaaaaaaaaaaaaa';
            width: 20px;
            height: 20px;
            position: absolute;
            right: 10px;
            top: 0;
            color: red;
            background: red;
            display: block;
        }
    }
    &__confirm{
        display: flex;
        justify-content: space-between;
    }
    &__check{
        input{
            cursor: pointer;
        }
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        gap: 5px;
        &__content{
            font-weight: 400;
            font-size: 1.4rem;
        }
        &__recover{
            font-weight: 500;
            font-size: 1.4rem;
            color:#0071DC;
        }
    }
    &__signIn{
        font-size: 1.6rem;
        &__link{
            font-size: 1.8rem;
            font-weight: 500;
            color: #0071DC;
        }
    }
}
.signupButton{
    width: 100%;
    padding: 10px 20px;
    font-size: 1.8rem;
    font-weight: 500;
    border: none;
    color: #333;
    background-color: #FFB700;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #d7a321;
        color :#fff;
    }
}
.signinButton{
    margin: 10px 0;
    width: 100%;
    padding: 10px 20px;
    font-size: 1.8rem;
    font-weight: 500;
    border-radius: 10px;
    background-color: #dddde6;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 30px;
    &:hover{
        background-color: #b6b6ec;
        color: #fff;
    }

}
</style>