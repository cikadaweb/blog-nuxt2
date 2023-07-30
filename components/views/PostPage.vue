<template>
  <div class="post-page">
    <div class="container post-page__container">
      <div class="post-page__card">

        <div class="post-page__header">
          <h1 class="post-page__text post-page__text_title">{{ currentPost.title }}</h1>
          <div>Author: {{ currentPostUser.name }}</div>
        </div>

        <div class="post-page__body">
          <div class="post-page__text_subtitle">Статья</div>
          <p class="post-page__text post-page__text_body">{{ currentPost.body }}</p>
        </div>

        <AppDivider />

        <CreateComment class="post-page__form" />

        <CommentList class="post-page__list" :items="currentPostComments"/>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppDivider from '@/components/UI/BaseDivider.vue';
import CreateComment from '~/components/form/CreateComment.vue';
import CommentList from '~/components/comments/CommentList.vue';

import { IPost, IComment } from '@/store/posts';
import { IUser } from '@/store/users';

export default defineComponent({
  name: 'PostPage',
  components: {
    AppDivider, CreateComment, CommentList
  },
  computed: {
    currentPost(): IPost {
      return this.$store.getters['posts/getCurrentPost'];
    },
    currentPostUser(): IUser {
      return this.$store.getters['users/getCurrentPostUser'];
    },
    currentPostComments(): IComment[] {
      return this.$store.getters['posts/getCurrentPostComments'];
    },
  },
  mounted() {
    const postId = Number(this.$route.params.id);
    if (!isNaN(postId)) {
      this.fetchCurrentPost(postId);
    }
  },
  methods: {
    fetchCurrentPost(postId: number) {
      this.$store.dispatch('posts/fetchCurrentPost', postId);
    },
  },
});
</script>

<style lang="scss" scoped>
.post-page__card {
  background-color: $bg-secondary;
  padding: 40px;
  border-radius: 15px;
  margin: 50px 0;
  @include for-size(tablet) {
    padding: 20px;
  }
}
.post-page__header {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  @include for-size(tablet) {
    flex-wrap: wrap;
  }
}
.post-page__text {
  margin: 0;
}

.post-page__text_title {
  font-size: 24px;
}

.post-page__text_subtitle {
  font-size: 20px;
}

.post-page__text_body {
  margin-top: 20px;
}

.post-page__body {
  margin-top: 90px;
  margin-bottom: 60px;
}

.post-page__form, .post-page__list {
  margin-top: 40px;
}
</style>
