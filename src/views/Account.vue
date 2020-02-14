<template>
  <div class="account">
    <h1>This is an account page</h1>
    <div class="buttons is-centered">
      <Auth />
      <b-button type="is-info"
        icon-left="account"
        @click="logOut()">
        Log out
      </b-button>
    </div>
    <div></div>
  </div>
</template>

<script>
import Auth from '@/components/Auth.vue'

export default {
  name: 'Account',
  components: {
    Auth
  },
  methods: {
    logOut () {
    }
  }
}
</script>
