import "./assets/scss/main.scss";
import "./assets/scss/_index.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
// firebase

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
