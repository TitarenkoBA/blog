<template>
  <div id="app">
    <b-navbar class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                src="@/assets/logo-1.jpg"
                alt="Logo Lorem ipsum"
              >
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/account' }">
                Account
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons is-centered">
                    <SignUp v-if="!this.loggedUser.role"/>
                    <LogIn v-if="!this.loggedUser.role"/>
                    <b-button v-else type="is-light" @click="logOut()">
                      Log out
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  components: {
    LogIn,
    SignUp
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
    }
  },
  computed: {
    loggedUser () {
      return this.$store.state.loggedUser
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: auto;
  height: auto;
}
</style>
