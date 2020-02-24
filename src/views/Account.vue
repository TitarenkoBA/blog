<template>
  <div class="account container">
    <h1>This is an account page</h1>
    <div class="container-small" v-if="this.$store.state.loggedUser.id">
      <p>ID: {{this.loggedUser.id}}</p>
      <p>Email: {{this.loggedUser.login}}</p>
      <p>Role: {{this.loggedUser.role}}</p>
    </div>
    <p v-else>You must be log in for see more information</p>
  </div>
</template>

<script>

export default {
  name: 'Account',
  computed: {
    loggedUser () {
      return this.$store.state.loggedUser
    }
  }
}
</script>

<style scoped lang="less">
.container-small {
  text-align: left;
  width: 50%;
  margin: 5% auto;
  p {
    padding: 1% 0;
  }
}
h1 {
  margin: 5%;
}
</style>
