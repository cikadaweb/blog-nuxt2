<template>
  <ul class="card-list">
    <li class="card-item" v-for="item in items" :key="item.id">
      <CardItem :item="item"/>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CardList',
    components: {
      CardItem
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
.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
