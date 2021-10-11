import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

function calculate(operandString, first, second) {
  switch (operandString) {
    case 'sum':
      return first + second;
    case 'subtract':
      return first - second;
    case 'multiply':
      return first * second;
    case 'divide':
      return first / second;
  }
}

const AppRoot = defineComponent({
  data: () => ({
    firstValue: 0,
    secondValue: 0,
    radioValue: 'sum',
  }),

  computed: {
    calculated() {
      const value = calculate(this.radioValue, this.firstValue, this.secondValue);

      if (!isNaN(value)) {
        return value;
      } else {
        return 'Mission impossible';
      }
    },
  },
});

const app = createApp(AppRoot);

const vm = app.mount('#app');
