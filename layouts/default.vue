<template>
  <div>
    <AppAlert />
    <TheHeader />
    <Nuxt class="main"/>
  </div>
</template>

<script>
import AppAlert from '@/components/alert/AppAlert.vue';
import TheHeader from '@/components/header/TheHeader.vue';

  export default {
    components: {
      TheHeader, AppAlert
    }
  }
</script>

<style lang="scss" scoped>
.main {
  padding-top: 80px;
}
</style>
