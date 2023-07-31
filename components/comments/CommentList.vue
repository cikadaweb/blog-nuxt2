<template>
  <ul class="comment-list">
    <div class="comment-list__title">Комментарии</div>
    <li v-for="item in items" :key="item.id" class="comment-item">
      <CommentItem :item="item"/>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CommentList',
    components: {
      CommentItem
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        },
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.comment-list__title {
  font-size: 20px;
  margin-bottom: 40px;
}
</style>
