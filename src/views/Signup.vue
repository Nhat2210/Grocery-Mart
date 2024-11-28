<script setup>
import { auth, createUserWithEmailAndPassword } from "../firebase.js"; 
import { ref } from "vue";
import { useMessage } from "naive-ui";


const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const message = useMessage();

// Them Validate
//add validate
const validateEmail = () => {
  if (!email.value) {
    message.warning("Vui lòng nhập email");
    return false;
  } else if (!/^[a-zA-Z0-9](\.?[a-zA-Z0-9])+@g(oogle)?mail\.com$/.test(email.value)) {
    message.warning("Định dạng email không hợp lệ (chỉ chấp nhận Gmail");
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
// ket thuc validate

// Hàm xử lý đăng ký
const handleSignUp = async () => {
  if (validateEmail() || validatePassword() || !confirmPassword.value) {
    message.warning("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    message.warning("Mật khẩu và xác nhận mật khẩu không khớp.");
    return;
  }

  try {
    const useCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = useCredential.user;
    console.log("Đăng ký thành công:", user.email);
    message.success("Đăng ký thành công! Vui lòng đăng nhập.");
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error.message);
    message.error("Đăng ký thất bại: ");
  }
};
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
        <h2 class="signup-right__heading">Sign Up</h2>
        <p class="signup-right__desc">Let’s create your account and  Shop like a pro and save money.</p>
        <input type="text" class="signup-right__input email" placeholder="Email"  v-model="email"><br>
        <input type="password" class="signup-right__input password" placeholder="Password"  v-model="password"><br>
        <input type="password" class="signup-right__input confirmpassword" placeholder="Confirm Password"    v-model="confirmPassword"><br>
        <div class="signup-right__confirm">
            <div class="signup-right__check">
                <input type="checkbox">
                <p class="signup-right__check__content">Set as default card</p>
            </div>
            <a href="#!" class="signup-right__check__recover">Recovery Password</a>
        </div>
        <button class="signupButton" @click="handleSignUp">Sign Up</button>
        <button class="signinButton">
            <img src="../assets/signup/gg.svg" alt="" class="signinButton__icon">
            Sign in with Gmail
        </button>
        <div class="signup-right__signIn">
            You have an account yet ? <a href="/Login" class="signup-right__signIn__link">Sign In</a>
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