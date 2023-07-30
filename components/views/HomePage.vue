<template>
  <div class="home-page">
    <div class="container home-page__container">
      <BaseSelect
        :value="chosenUser.text"
        class="home-page__select"
        :options="users"
        width="300px"
        @update-select="updateSelect"
        @clear-select="clearSelect"
      />

      <CardList :items="posts"/>

    </div>
  </div>
</template>

<script lang="ts">
import BaseSelect from '@/components/UI/BaseSelect.vue';
import CardList from '@/components/card/CardList.vue';
import { defineComponent } from 'vue'

import { IUser } from '@/store/users';
import { IPost } from '@/store/posts';

interface iSelectedUser {
  id: null | number,
  text: string
}

interface IState {
  chosenUser: iSelectedUser
}

export default defineComponent({
  name: 'HomePage',
  components: {
    BaseSelect, CardList
  },
  data() {
    return {
      chosenUser: {
        id: null,
        text: 'Выбрать'
      } as iSelectedUser,
    } as IState
  },
  computed: {
    users(): IUser[] {
      return this.$store.getters['users/getUsers'];
    },
    posts(): IPost[] {
      return this.$store.getters['posts/getPosts'];
    }
  },
  watch: {
    chosenUser(value: iSelectedUser) {
      if(value.id !== null) {
        this.fetchPostsByUserId(value.id)
      }
    }
  },
  mounted() {
    this.fetchUsers();
    this.fetchPosts();
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch('users/fetchUsers');
    },
    fetchPosts() {
      this.$store.dispatch('posts/fetchPosts');
    },
    fetchPostsByUserId(userId: number) {
      this.$store.dispatch('posts/fetchPostsByUserId', userId);
    },
    updateSelect(option: IUser) {
      this.chosenUser = {
        id: option.id,
        text: option.name
      };
    },
    clearSelect() {
      this.chosenUser = {
        id: null,
        text: 'Выбрать'
      };
    }
  },
});
</script>

<style lang="scss" scoped>
.home-page__container {
  margin-top: 50px;
}
.home-page__select {
  margin-bottom: 30px;
}
</style>
