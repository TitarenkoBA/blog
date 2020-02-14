<template>
  <b-button type="is-info"
    con-left="delete"
    @click="cardModal()">
    Create
  </b-button>
</template>

<script>
import ModalCreateEditPost from '@/components/ModalCreateEditPost.vue'

export default {
  name: 'CreatEditPost',
  methods: {
    cardModal () {
      this.$buefy.modal.open({
        parent: this,
        component: ModalCreateEditPost,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  }
}
</script>

<style scoped>
.buttons {
  justify-content: right;
}
textarea {
  width: 90%;
  height: 80%;
}
</style>
