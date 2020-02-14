<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <Post />
    <Pagination />
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
  }
}
</script>

<style scoped lang="less">

</style>
