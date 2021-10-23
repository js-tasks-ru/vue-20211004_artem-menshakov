<template>
  <div v-if="toasts.length" class="toasts">
    <template v-for="(toast, index) in toasts" :key="toast.id">
      <the-toaster-item :toast="toast" @destroyToast="removeToast(index)"></the-toaster-item>
    </template>
  </div>
</template>

<script>
import TheToasterItem from './TheToasterItem';

const generateUniqId = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

export default {
  name: 'TheToaster',
  components: { TheToasterItem },
  data: () => ({
    toasts: [],
  }),

  methods: {
    success(message, duration) {
      this.showToast(message, 'success', duration);
    },

    error(message, duration) {
      this.showToast(message, 'error', duration);
    },

    showToast(message = 'default message', type = 'success', duration = 5000) {
      this.toasts.push({
        message,
        type,
        duration,
        icon: this.mapToastIcon(type),
        id: generateUniqId(),
      });
    },

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

    removeToast(index) {
      this.toasts.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
