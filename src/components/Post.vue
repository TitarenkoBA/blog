<template>
  <div class="post">
    <h3></h3>
    <p></p>
    <date></date>
    <div class="buttons">
      <CreatingPost />

      <b-button type="is-info"
          icon-left="delete">
          Edit
      </b-button>

      <b-button type="is-info"
          icon-left="delete">
          Delete
      </b-button>

      <b-button type="is-info"
          icon-right="delete" />
    </div>
  </div>
</template>

<script>
import CreatingPost from '@/components/CreatingPost.vue'
export default {
  name: 'Post',
  components: {
    CreatingPost
  }
}
</script>

<style scoped lang="less">

</style>


