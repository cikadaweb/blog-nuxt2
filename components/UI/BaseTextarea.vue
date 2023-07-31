<template>
  <div class="textarea" :style="{ width: width }">
    <label
      class="textarea__label"
      :for="name"
    >{{ label }}</label>
    <textarea
      class="textarea__text"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @input="updateValue($event)"
    ></textarea>
  </div>
</template>

<script>
  export default {
    name: 'BaseTextarea',
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
.textarea__label {
  display: inline-block;
  margin-bottom: 12px;
}

.textarea__text {
  @include input-reset;
}
.textarea__text {
  width: 100%;
  resize: vertical;
  min-height: 120px;
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
// .textarea_error {
//   background: $bg-secondary;
//   color: $font-primary-default;
//   border: 1px solid $border-error;
// }
</style>
