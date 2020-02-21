<template>
  <b-button type="is-info"
    @click="cardModal()">
    Change password
  </b-button>
</template>

<script>
import ModalFormChangePassword from '@/components/ModalFormChangePassword.vue'

export default {
  name: 'ChangePassword',
  methods: {
    cardModal () {
      this.$buefy.modal.open({
        parent: this,
        component: ModalFormChangePassword,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  }
}
</script>
