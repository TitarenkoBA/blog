<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <Auth v-if="this.state.auth = 'false'" />
      <router-link to="/account" v-else>Account</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
</style>
