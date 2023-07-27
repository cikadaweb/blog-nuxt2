<template>
  <div>
    <button>Button</button>
    <button class="btn_scss">Button + SCSS</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
.btn_scss {
  @include button-reset;
}
</style>
