import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const AppRoot = defineComponent({
  data: () => ({
    counter: 0,
  }),

  methods: {
    increase: function () {
      this.counter++;
    },
  },
});

const app = createApp(AppRoot);
const vm = app.mount('#app');
