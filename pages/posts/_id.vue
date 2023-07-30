<template>
  <div>
    <PostPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PostPage from '@/components/views/PostPage.vue';

export default defineComponent({
  components: {
    PostPage
  }
})
</script>
