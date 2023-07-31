<template>
  <div class="select" :style="{ maxWidth: width }" v-click-outside="closeSelect">
    <div class="select__input" @click.self="toggleOptionsVisible">
      {{ value  }}
     <svg-icon
        v-show="isOptionChosen"
        class="select__icon select__icon_clear"
        name="clear"
        width="16"
        height="16"
        @click.stop="clearSelect"
      />
      <svg-icon
        class="select__icon select__icon_arrow"
        name="drop-down"
        width="20"
        height="20"
        @click="toggleOptionsVisible"
      />
    </div>
    <ul v-show="isShowOptions" class="select__list">
      <li
        v-for="option in options"
        class="select__item"
        :key="option.value"
        @click="selectOption(option)"
        >{{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BaseSelect',
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      value : {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '300px'
      }
    },
    emits: ['update-select', 'clear-select'],
    data() {
      return {
        isShowOptions: false
      }
    },
    computed: {
      isOptionChosen() {
        if (!this.options.some((option) => option.name === this.value)) {
          return false;
        }
        return true;
      }
    },
    methods: {
      toggleOptionsVisible() {
        this.isShowOptions = !this.isShowOptions;
      },
      selectOption(option) {
        this.isShowOptions = false;
        this.$emit('update-select', option);
      },
      clearSelect() {
        this.isShowOptions = false;
        this.$emit('clear-select');
      },
      closeSelect() {
        this.isShowOptions = false;
      }
    },
  }
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  position: relative;
}
.select__input {
  position: relative;
  border-radius: 15px;
  border: 1px solid #000;
  padding: 15px 20px;
}

.select__icon {
  position: absolute;
}
.select__icon_clear {
  top: 50%;
  transform: translateY(-50%);
  right: 35px;
}

.select__icon_arrow {
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

.select__list {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 5;

  max-height: 300px;
  background-color: $bg-white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  border-radius: 0 0 15px 15px;
  margin: 3px 0 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.45);
}

.select__item {
  background-color: $bg-white;
  padding: 10px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
.select__item:hover {
  background-color: $bg-primary;
  color: $font-white;
}

</style>
~/plugins/click-outside
