<template>
  <div class="comment-item">
    <div class="comment-item__header">{{item.email}}</div>
    <p class="comment-item__body">{{ item.body }}</p>
  </div>
</template>


<script>
  export default {
    name: 'CommentItem',
    props: {
      item: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
.comment-item {
  position: relative;

  padding: 30px 25px;
  background-color: $bg-secondary;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.45);
  @include for-size(tablet) {
    padding: 20px 15px;
  }
}
.comment-item__header {
  display: inline-block;
  vertical-align: top;
  font-size: 18px;
  text-decoration: none;
  color: $font-primary;
  margin-bottom: 15px;
}

.comment-item__header::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.comment-item__body {
  background-color: $bg-white;
  padding: 30px 25px;
  border-radius: 15px;
  margin: 0;
}
</style>
