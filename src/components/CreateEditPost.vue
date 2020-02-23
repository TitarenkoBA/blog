<template>
  <b-button type="is-info"
    @click="cardModal()">
    <slot></slot>
  </b-button>
</template>

<script>
import ModalCreateEditPost from '@/components/ModalCreateEditPost.vue'

export default {
  name: 'CreatEditPost',
  props: ['setButtonType', 'postID'],
  methods: {
    cardModal () {
      this.checkButtonType()
      this.rememberEditingPost()
      this.$buefy.modal.open({
        parent: this,
        component: ModalCreateEditPost,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    },
    checkButtonType () {
      this.$store.dispatch('setButtonType', this.setButtonType)
    },
    rememberEditingPost () {
      this.$store.dispatch('rememberEditingPost', this.postID)
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
