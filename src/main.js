// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";
// Plugins
import { registerPlugins } from "@/plugins";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

registerPlugins(app);
app.mount("#app");
