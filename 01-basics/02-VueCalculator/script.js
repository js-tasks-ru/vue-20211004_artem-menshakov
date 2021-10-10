import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const AppRoot = defineComponent({
  data: () => ({
    firstValue: 0,
    secondValue: 0,
    radioValue: 'sum',
  }),

  computed: {
    calculated() {
      const value = this._calculateValue(this.radioValue, +this.firstValue, +this.secondValue);

      if (!isNaN(value)) {
        return value;
      } else {
        return 'Mission impossible';
      }
    },
  },

  methods: {
    _calculateValue: function (value, first, second) {
      switch (value) {
        case 'sum':
          return first + second;
        case 'subtract':
          return first - second;
        case 'multiply':
          return first * second;
        case 'divide':
          return first / second;
      }
    },
  },
});

const app = createApp(AppRoot);

const vm = app.mount('#app');
