<template>
  <div class="card-item">
    <router-link
      :to="`/posts/${item.id}`"
      class="card-item__header"
    >{{item.title}}
    </router-link>
    <p class="card-item__body">{{ item.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPost } from '@/store/posts';

export default defineComponent({
  name: 'CardList',
  props: {
    item: {
      type: Object as PropType<IPost>,
      required: true
    },
  },
});
</script>

<style lang="scss" scoped>
.card-item {
  position: relative;

  padding: 30px 25px;
  background-color: $bg-secondary;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.45);
}
.card-item__header {
  display: inline-block;
  vertical-align: top;
  font-size: 18px;
  text-decoration: none;
  color: $font-primary;
  margin-bottom: 15px;
}

.card-item__header::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.card-item__body {
  background-color: $bg-white;
  padding: 30px 25px;
  border-radius: 15px;
  margin: 0;
}
</style>
