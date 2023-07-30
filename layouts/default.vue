<template>
  <div>
    <AppAlert />
    <TheHeader />
    <Nuxt class="main"/>
  </div>
</template>

<script lang="ts">
import AppAlert from '@/components/alert/AppAlert.vue';
import TheHeader from '@/components/header/TheHeader.vue';

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'default',
  components: {
    TheHeader, AppAlert
  }
});
</script>

<style lang="scss" scoped>
.main {
  padding-top: 80px;
}
</style>
