<template>
  <form action="" id="LogInForm">
    <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Change password</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Current password">
      <b-input
        type="password"
        :value="password"
        password-reveal
        placeholder="Current password"
        required>
      </b-input>
      </b-field>

      <b-field label="New password">
      <b-input
        type="password"
        :value="password"
        password-reveal
        placeholder="New password"
        required>
      </b-input>
      </b-field>

      <b-field label="Repeat password">
      <b-input
        type="password"
        :value="password"
        password-reveal
        placeholder="Repeat password"
        required>
      </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click.prevent="ChangePassword()">Change</button>
    </footer>
    </div>
  </form>
</template>

<script>

export default {
  name: 'ModalFormChangePassword',
  props: {
    email: String,
    password: String
  },
  methods: {
    ChangePassword () {
      const passes = document.querySelectorAll('[type="password"]')
      const passwords = {
        currentPassword: passes[0].value,
        newPassword: passes[1].value,
        repeatPassword: passes[2].value
      }
      const loggedUser = this.$store.state.loggedUser
      if (loggedUser.password === passwords.current) {
        if (passwords.newPassword === passwords.repeatPassword) {
          this.$store.dispatch('changePassword', passwords.newPassword)
          this.$parent.close()
        }
      }
    }
  }
}
</script>
