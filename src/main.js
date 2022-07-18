import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap
// import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";

import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";

createApp(App).use(router).use(store).mount("#app");
