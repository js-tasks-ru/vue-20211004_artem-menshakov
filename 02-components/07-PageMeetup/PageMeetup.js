import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    meetup: null,
    errorMessage: null,
    loading: false,
  }),

  watch: {
    meetupId: {
      immediate: true,
      handler: function () {
        this.loading = true;

        if (this.errorMessage) {
          this.errorMessage = null;
        }

        fetchMeetupById(this.meetupId)
          .then((res) => {
            this.meetup = res;
          })
          .catch((err) => {
            this.errorMessage = err.message;
            this.meetup = null;

            // throw new Error(err);
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },
  },

  created() {},

  template: `
    <div class="page-meetup">
      <!-- meetup view -->

      <template v-if="!errorMessage">
        <meetup-view v-if="!loading" :meetup="meetup"></meetup-view>

        <ui-container v-else>
          <ui-alert>Загрузка...</ui-alert>
        </ui-container>
      </template>

      <ui-container v-else>
        <ui-alert>{{ errorMessage }}</ui-alert>
      </ui-container>
    </div>`,
});
