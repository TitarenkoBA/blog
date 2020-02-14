<template>
  <div class="home">
    <Blog />
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog.vue'

export default {
  name: 'Home',
  components: {
    Blog
  }
}
</script>

<style scoped>
img {
  width: 25%;
  height: auto;
}
</style>
