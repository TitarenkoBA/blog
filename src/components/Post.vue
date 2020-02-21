<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <h3 class="modal-card-title">{{post.title}}</h3>
    </header>
    <section class="modal-card-body">
      <p>{{post.description}}</p>
      <p class="date">{{new Date(Date.parse(post.createdAt))}}</p>
      <p class="date">{{new Date(Date.parse(post.updateAt))}}</p>
      <div class="buttons">
        <CreateEditPost v-if="this.loggedUserRole === 'writer'" setButtonType="edit" :postIndex="this.postIndex">Edit</CreateEditPost>
        <b-button v-if="this.loggedUserRole === 'writer'" type="is-info" @click="remove()">
          Delete
        </b-button>
        <b-button v-if="this.loggedUserRole === 'reader'" type="is-info" @click="clap()">
          <b-icon
            pack="fas"
            icon="sign-language"
            size="is-small"
            class="middle">
          </b-icon>
          <span class="middle">{{post.claps}}</span>
        </b-button>
      </div>
    </section>
  </div>
</template>

<script>
import CreateEditPost from '@/components/CreateEditPost.vue'

export default {
  name: 'Post',
  components: {
    CreateEditPost
  },
  props: ['post'],
  methods: {
    clap () {
      this.$store.dispatch('clapPost', this.postIndex)
    },
    remove () {
      this.$store.dispatch('deletePost', this.postIndex)
    }
  },
  computed: {
    postIndex () {
      return this.$store.state.posts.findIndex((item) => item.id === this.post.id)
    },
    loggedUserRole () {
      return this.$store.state.loggedUser.role
    }
  }
}
</script>

<style scoped lang="less">
.buttons {
  justify-content: right;
}
p{
  text-align: left;
}
.date {
  text-align: right;
}
.middle {
  vertical-align: middle;
}
</style>
