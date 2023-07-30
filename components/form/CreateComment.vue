<template>
  <form method="POST" action="#" class="create-comment" @submit.prevent="submitForm">
    <div class="create-comment__title">Добавить комментарий</div>

    <div class="create-comment__row">
      <div class="create-comment__column">
        <BaseInput
          v-model="userName"
          type="text"
          name="userName"
          placeholder="Введите имя"
          label="Ваше имя:"
          width="100%"
          required
        />
      </div>
      <div class="create-comment__column">
        <BaseTextarea
          v-model="userText"
          type="text"
          name="userText"
          placeholder="Введите текст записи"
          label="Комментарий:"
          width="100%"
          required
        />
      </div>
      <div class="create-comment__column create-comment__column_actions">
        <BaseButton
          @click-on-button="submitForm"
        >Отправить</BaseButton>
      </div>
    </div>

  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from '@/components/UI/BaseInput.vue';
import BaseTextarea from '@/components/UI/BaseTextarea.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

interface IState {
  userName: string,
  userText: string
}

export default defineComponent({
  name: 'CreateComment',
  components: {
    BaseInput, BaseTextarea, BaseButton
  },
  data() {
    return {
      userName: '',
      userText: ''
    } as IState
  },
  methods: {
    submitForm() {
      console.log({
        username: this.userName,
        userText: this.userText
      });
    },
  }
});
</script>

<style lang="scss" scoped>
.create-comment__title {
  font-size: 20px;
  margin-bottom: 40px;
}

.create-comment__row {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.create-comment__column_actions {
  align-self: flex-end;
}
</style>
