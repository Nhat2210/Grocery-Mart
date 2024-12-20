import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Homepage from "@/views/Homepage.vue";
import ProductPage from "@/views/ProductPage.vue";
import ModalCheckOut from "@/components/ModalCheckout.vue";
import CheckOut from "@/views/CheckOut.vue";
import test from "@/views/test.vue";
import CheckOutShipping from "@/views/checkOutShipping.vue";
import CheckoutPayment from "@/views/checkoutPayment.vue";
import favouriteList from "@/views/favouriteList.vue";
import Profile from "@/views/profile.vue";
import creditCard from "@/views/profileCard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: Homepage,
    },

    {
      path: "/profile",
      component: Profile,
      children: [
        {
          path: "creditCard",
          component: creditCard,
        },
      ],
    },
    {
      path: "/favouriteList",
      component: favouriteList,
    },
    {
      path: "/checkoutPayment",
      component: CheckoutPayment,
    },
    {
      path: "/CheckOutShipping",
      component: CheckOutShipping,
    },
    {
      path: "/testhihi",
      component: test,
    },
    {
      path: "/Checkout",
      component: CheckOut,
    },
    {
      path: "/test",
      component: ModalCheckOut,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "/SignUp",
      component: Signup,
    },
    {
      path: "/ProductPage",
      component: ProductPage,
    },
  ],
});

export default router;
