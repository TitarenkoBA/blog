<template>
  <div class="blog">
    <h1>Posts</h1>
    <CreateEditPost class="buttons is-left" v-if="this.loggedUser.role === 'writer'" setButtonType="add">Create</CreateEditPost>
    <Post v-for="post of this.$store.state.posts" :key="post.id" :post="post"/>
    <Pagination v-if="this.$store.state.posts.length > 10"/>
  </div>
</template>

<script>
import CreateEditPost from '@/components/CreateEditPost.vue'
import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Blog',
  components: {
    CreateEditPost,
    Post,
    Pagination
  },
  computed: {
    loggedUser () {
      return this.$store.state.loggedUser
    }
  },
  methods: {
    setButtonType () {
      this.$store.state.buttonType = 'add'
    },
    log (item) {
      console.log(item)
    }
  },
  mounted () {
    this.$store.dispatch('loadPosts')
  }
}
</script>

<style scoped lang="less">
h1 {
  text-align: left;
  font-size: 2em;
}
</style>
