import Vue from "vue";
import App from "./App.vue";

import VTW from "v-tw-directives";

Vue.config.productionTip = false;

Vue.use(VTW, {
  tw: {
    button: {
      classes: "bg-teal-300 hover:bg-teal-400 text-white py-2 px-3",
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
