<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Good news, guys</h3>
    </header>
    <section class="modal-card-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius ullam accusantium quos dolorem expedita numquam nulla pariatur obcaecati laboriosam odio debitis perspiciatis ipsa temporibus quisquam iste omnis, similique officiis!</p>
      <p class="date">2020-10-01</p>
      <div class="buttons">
        <CreateEditPost class="CreateEditPost CreatePost"/>
        <CreateEditPost class="CreateEditPost EditPost"/>
        <b-button type="is-info">
          Delete
        </b-button>
        <b-button type="is-info"
          icon-left="delete">
          <p>1</p>
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
.CreateEditPost {
  margin-right: 8px;
}
</style>
