<template>
  <div class="toast" :class="`toast_${toast.type}`">
    <ui-icon class="toast__icon" :icon="toastIcon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToasterItem',

  components: { UiIcon },

  props: {
    toast: {
      type: Object,
      required: true,
    },
  },

  emits: ['destroyToast'],

  data: () => ({
    timeoutId: null,
  }),

  computed: {
    toastIcon() {
      return this.mapToastIcon(this.toast.type);
    },
  },

  created() {
    if (this.toast.duration) {
      this.timeoutId = setTimeout(() => {
        this.$emit('destroyToast');
      }, this.toast.duration);
    }
  },

  beforeUnmount() {
    // console.log('beforeUnmount', this.$options.timeoutId);
    clearTimeout(this.timeoutId);
  },

  methods: {
    mapToastIcon(type) {
      switch (type) {
        case 'success':
          return 'check-circle';
        case 'error':
          return 'alert-circle';
        default:
          return 'check-circle';
      }
    },
  },
};
</script>

<style scoped></style>
