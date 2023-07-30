<template>
  <div>
    <TheHeader />
    <Nuxt class="main"/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue';

</script>

<style lang="scss" scoped>
.main {
  padding-top: 80px;
}
</style>
