<template>
  <button
    class="button"
    :class="[buttonColorClass]"
    :type="type"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      color: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        default: 'button',
      },
    },
    emits: ['click-on-button'],
    computed: {
      buttonColorClass() {
        return 'btn_primary'
      }
    },
    methods: {
      clickOnButton() {
        this.$emit('click-on-button');
      }
    },
  }
</script>

<style lang="scss" scoped>
.button {
  @include button-reset;
}
.button{
  @include font(14px, 400, 19px);
  border-radius: $btn-radius;
  padding: $btn-padding;
}

.btn_primary {
  background-color: $bg-primary;
  color: $font-white;
  // &:hover {
  //   background-color: $bg-primary-hover;
  //   color: $font-secondary;
  // }
  // &:active {
  //   background-color: $bg-primary-active;
  //   color: $font-secondary;
  // }
  // &:disabled {
  //   background-color: $bg-disabled;
  //   color: $font-disabled;
  // }
  // &_active {
  //   background-color: $bg-primary-active;
  //   color: $font-secondary;
  // }
}
</style>
