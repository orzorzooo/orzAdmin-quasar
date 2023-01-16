import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";

import App from "./App.vue";
import router from "./router";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

// tailwindcss
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: { Notify }, // import Quasar plugins and add here
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    },
  },
});
app.mount("#app");
