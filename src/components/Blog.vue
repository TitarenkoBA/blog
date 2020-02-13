<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <Post v-for="item in posts" :key="item.id"></Post>  
    <Pagination />  
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Post from '@/components/Pagination.vue'

export default {
  name: 'Blog',
  components: {
    Post,
    Pagination
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
</style>
