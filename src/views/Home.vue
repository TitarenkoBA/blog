<template>
  <div class="home">
    <img alt="" src="../assets/logo.png">
    <Blog msg="Welcome to News Blog"/>
    <Auth v-if="this.state.auth == 'false'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog.vue'
import Auth from '@/components/Auth.vue'

export default {
  name: 'Home',
  components: {
    Blog
  }
}
</script>
