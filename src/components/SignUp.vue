<template>
  <b-button type="is-info"
    @click="cardModal()">
    Sign up
  </b-button>
</template>

<script>
import ModalFormSignUp from '@/components/ModalFormSignUp.vue'

export default {
  name: 'SignUp',
  methods: {
    cardModal () {
      this.$buefy.modal.open({
        parent: this,
        component: ModalFormSignUp,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  }
}
</script>
