import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      default: 0,
    },
  },

  emits: ['update:count'],

  methods: {
    updateCounter(e) {
      this.$emit('update:count', this.count + 1);
    },
  },

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="updateCounter">{{ count }}</button>`,
});
