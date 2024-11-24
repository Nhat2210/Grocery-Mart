import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Signup from "@/views/Signup.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: Signup }],
});

export default router;
