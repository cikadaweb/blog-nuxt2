<template>
  <div class="input" :style="{ width: width }">
    <label
      class="input__label"
      :for="name"
    >{{ label }}</label>
    <input
      class="input__text"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @input="updateValue($event)"
    />
  </div>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: '300px',
      }
    },
    emits: ['input'],
    methods: {
      updateValue(event) {
        if (event.target) {
          this.$emit('input', event.target.value);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.input__label {
  display: inline-block;
  margin-bottom: 12px;
}

.input__text {
  @include input-reset;
}
.input__text {
  width: 100%;
  background: $bg-white;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid $font-white-hover;
  outline: none;
  transition: all 0.3s ease 0s;

  &:hover {
    border: 1px solid $border-hover;
  }

  &:focus {
    border: 1px solid $border-hover;
  }

  &:active {
    border: 1px solid $border-active;
  }

  &:disabled {
    background: $bg-disabled;
    color: $font-disabled;
    border: 1px solid $border-disabled;
  }

  &::placeholder {
    color: $font-placeholder;
  }
}
// .input_error {
//   background: $bg-secondary;
//   color: $font-primary-default;
//   border: 1px solid $border-error;
// }
</style>
