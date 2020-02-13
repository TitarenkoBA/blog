<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <Post v-for="item in posts" :key="item.id"></Post>  
    <Pagination v-if="posts.lenght > 10"/>  
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'

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
