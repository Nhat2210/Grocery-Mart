import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Homepage from "@/views/Homepage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: Homepage,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "/SignUp",
      component: Signup,
    },
  ],
});

export default router;
