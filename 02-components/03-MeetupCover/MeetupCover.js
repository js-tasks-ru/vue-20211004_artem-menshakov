import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: ['title', 'image'],

  computed: {
    bgUrl() {
      return this.image
        ? `--bg-url: url(${this.image})`
        : "--bg-url: url('https://course-vue.javascript.ru/api/images/2')";
    },
  },

  template: `
    <div class="meetup-cover" :style="bgUrl">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
