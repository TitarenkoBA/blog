<template>
  <form action="">
    <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit post</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title"
        message="Type title of your post here">
        <b-input :value="title"></b-input>
      </b-field>
      <b-field label="Post"
        message="Type your post here">
        <textarea :value="message"></textarea>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Cancel</button>
      <button class="button is-primary" @click.prevent="save()">Save</button>
    </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ModalCreateEditPost',
  props: {
    title: String,
    message: String
  },
  methods: {
    save () {
      if (this.$store.state.buttonType === 'add') {
        const post = {
          id: Math.round(Math.random() * 100),
          title: document.querySelector('input').value,
          description: document.querySelector('textarea').value,
          claps: 0,
          createdAt: new Date(),
          updateAt: new Date(),
          userId: this.$store.state.loggedUser.id
        }
        this.$store.dispatch('createPost', post)
      } else {
        const post = {}
        post.title = document.querySelector('input').value
        post.description = document.querySelector('textarea').value
        post.updateAt = new Date()
        post.userId = this.$store.state.loggedUser.id
        this.$store.dispatch('editPost', post)
      }
      this.$parent.close()
    }
  },
  mounted () {
    if (this.$store.state.buttonType === 'edit') {
      document.querySelector('input').value = this.$store.state.posts.find((item) => item.id === this.$store.state.editingPost).title
      document.querySelector('textarea').value = this.$store.state.posts.find((item) => item.id === this.$store.state.editingPost).description
    }
  }
}
</script>

<style scoped>
textarea {
  width: 500px;
  height: 200px;
}
</style>
