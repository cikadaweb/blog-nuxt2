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

<script>
import BaseSelect from '@/components/UI/BaseSelect.vue';
import CardList from '@/components/card/CardList.vue';

  export default {
    name: 'HomePage',
    components: {
      BaseSelect, CardList
    },
    data() {
      return {
        chosenUser: {
          id: null,
          text: 'Выбрать'
        },
      }
    },
    computed: {
      users() {
        return this.$store.getters['users/getUsers'];
      },
      posts() {
        return this.$store.getters['posts/getPosts'];
      }
    },
    watch: {
      chosenUser(value) {
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
      fetchPostsByUserId(userId) {
        this.$store.dispatch('posts/fetchPostsByUserId', userId);
      },
      updateSelect(option) {
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
  }
</script>

<style lang="scss" scoped>
.home-page__container {
  margin-top: 50px;
}
.home-page__select {
  margin-bottom: 30px;
}
</style>
