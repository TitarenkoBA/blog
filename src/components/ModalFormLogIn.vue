<template>
  <form action="" id="LogInForm">
    <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Email">
      <b-input
        type="email"
        :value="email"
        placeholder="Your email"
        required>
      </b-input>
      </b-field>

      <b-field label="Password">
      <b-input
        type="password"
        :value="password"
        password-reveal
        placeholder="Your password"
        required>
      </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click.prevent="logIn()">Log in</button>
    </footer>
    </div>
  </form>
</template>

<script>

export default {
  name: 'ModalFormLogIn',
  props: {
    email: String,
    password: String
  },
  methods: {
    logIn () {
      const user = {
        email: document.querySelector('[type="email"]').value,
        password: document.querySelector('[type="password"]').value
      }
      const LogInUser = this.$store.state.users.find((item) => (item.login === user.email) && (item.password === user.password))
      if (LogInUser) {
        this.$store.dispatch('logIn', LogInUser).then(() => this.$router.push('/'))
        this.$parent.close()
      }
    }
  }
}
</script>
