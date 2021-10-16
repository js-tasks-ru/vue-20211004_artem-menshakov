import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },

  computed: {
    localizeDate() {
      const vm = this;

      return function (isIsoFormat) {
        if (!isIsoFormat) {
          return new Date(vm.date).toLocaleDateString(navigator.language, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        } else return new Date(vm.date).toISOString().substr(0, 10);
      };
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="localizeDate(true)">{{ localizeDate() }}</time>
      </li>
    </ul>`,
});
