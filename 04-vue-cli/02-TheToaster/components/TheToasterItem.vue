<template>
  <div class="toast" :class="`toast_${toast.type}`">
    <ui-icon class="toast__icon" :icon="toast.icon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToasterItem',

  components: { UiIcon },

  timeoutId: null,

  props: {
    toast: {
      type: Object,
      required: true,
    },
  },

  emits: ['destroyToast'],

  created() {
    if (this.toast.duration) {
      this.$options.timeoutId = setTimeout(() => {
        this.$emit('destroyToast');
      }, this.toast.duration);
    }
  },

  beforeUnmount() {
    // console.log('beforeUnmount', this.$options.timeoutId);
    // clearTimeout(this.$options.timeoutId);
  },
};
</script>

<style scoped></style>
