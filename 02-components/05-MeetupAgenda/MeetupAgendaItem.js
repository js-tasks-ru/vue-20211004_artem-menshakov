import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
    },
  },

  computed: {
    title() {
      return this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type];
    },
    timeLine() {
      return this.agendaItem.startsAt && this.agendaItem.endsAt
        ? `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`
        : '00:00 - 00:00';
    },
    icon() {
      return this.agendaItem.type
        ? `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`
        : '/assets/icons/icon-cal-sm.svg';
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="icon" class="icon" :alt="agendaItem.type" />
      </div>
      <div class="agenda-item__col">{{ timeLine }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
