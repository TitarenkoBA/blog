<template>
  <b-button type="is-light"
    @click="cardModal()">
    Log in
  </b-button>
</template>

<script>
import ModalFormLogIn from '@/components/ModalFormLogIn.vue'

export default {
  name: 'LogIn',
  methods: {
    cardModal () {
      this.$buefy.modal.open({
        parent: this,
        component: ModalFormLogIn,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  }
}
</script>
