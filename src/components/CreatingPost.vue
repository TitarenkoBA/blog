<template>
  <section>
    <b-button type="is-info"
      icon-left="delete"
      @click="isImageModalActive = true">
      Create
    </b-button>

    <b-modal :active.sync="isImageModalActive">
      <p class="image is-4by3">
      <img src="/static/img/placeholder-1280x960.png">
      </p>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: 'CreatingPost',
  data () {
    return {
      isImageModalActive: false
    }
  }
}
</script>
