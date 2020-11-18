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
  twc: {
    card: {
        classes: 'bg-gray-100 rounded-sm p-2',
        modifiers: {
            green: 'bg-green-200',
            bordered: 'border border-gray-800',
        },
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
