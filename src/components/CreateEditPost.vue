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
  props: ['setButtonType', 'postIndex'],
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
      const button = this.setButtonType
      this.$store.dispatch('setButtonType', button)
    },
    rememberEditingPost () {
      const post = this.$store.state.posts[this.postIndex]
      this.$store.dispatch('rememberEditingPost', post)
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
