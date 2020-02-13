<template>
  <div class="home">
    <img alt="" src="../assets/logo.png">
    <Blog msg="Welcome to News Blog"/>
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
