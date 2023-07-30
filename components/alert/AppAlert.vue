<template>
  <div v-if="alert.info !== null" class="alert" :class="alertColor">
    <p class="alert__text">{{ alert.info }}</p>
    <svg-icon
      class="alert__icon"
      name="info-icon"
      width="16"
      height="16"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { IAlert } from '@/store/common';

export default defineComponent({
  name: 'AppAlert',
  computed: {
    alert(): IAlert {
      return this.$store.getters['common/getAlert'];
    },
    alertColor() {
      if (this.alert.status === 'danger') {
        return 'alert_danger'
      }
      else if (this.alert.status === 'warning') {
        return 'alert_warning'
      }
      return 'alert_success';
    },
  },
});
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;

  max-width: 560px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.alert_success {
  background-color: $bg-primary;
}

.alert_danger {
  background-color: $bg-danger;
}

.alert_warning {
  background-color: $bg-warning;
}

.alert__text {
  color: $font-white;
  margin: 0;
}
</style>
