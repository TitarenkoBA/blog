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
      <button class="button is-primary">Save</button>
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
  }
}
</script>

<style scoped>
textarea {
  width: 500px;
  height: 200px;
}
</style>
