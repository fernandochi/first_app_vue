/* eslint-disable semi */
/* eslint-disable quotes */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "../src/assets/css/tailwind.css";
import "../src/assets/css/fonts.css";
import "animate.css";

createApp(App)
  .use(router)
  .mount("#app");
