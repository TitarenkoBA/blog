<template>
  <div class="auth">
    <form>
        <label for="email">Enter your email</label>
        <input type="email" id="email">
        <label for="password" id="password">Enter your password</label>
        <input type="password">
        <button type="submit"></button>
    </form>    
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped lang="less">

</style>