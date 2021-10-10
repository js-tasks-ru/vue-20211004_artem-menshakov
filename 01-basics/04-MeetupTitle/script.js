import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const RootApp = defineComponent({
  data: () => ({
    meetup: null,
    meetupTitle: 'Select the meetup id',
  }),

  watch: {
    meetup(id) {
      this.meetupTitle = 'Loading...';

      fetchMeetupById(id)
        .then((res) => {
          this.meetupTitle = res.title;
        })
        .catch((err) => {
          this.meetupTitle = 'Something went wrong pls try again';

          throw new Error(err);
        });
    },
  },
});

const app = createApp(RootApp);

const vm = app.mount('#app');
