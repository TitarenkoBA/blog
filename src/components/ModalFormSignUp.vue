<template>
  <form action="">
    <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Sign up</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Email">
      <b-input ref="first"
        type="email"
        :value="email"
        placeholder="Your email"
        required>
      </b-input>
      </b-field>

      <b-field label="Password">
      <b-input ref="second"
        type="password"
        :value="password"
        password-reveal
        placeholder="Your password"
        required>
      </b-input>
      </b-field>

      <b-field label="Repeat password">
      <b-input
        type="password"
        :value="password"
        password-reveal
        placeholder="Repeat your password"
        required>
      </b-input>
      </b-field>

      <b-field label="Select you role">
        <b-select placeholder="Select a role">
          <option value="writer">Writer</option>
          <option value="reader">Reader</option>
        </b-select>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click.prevent="SignUp()">Sign up</button>
    </footer>
    </div>
  </form>
</template>

<script>

export default {
  name: 'ModalFormSignUp',
  props: {
    email: String,
    password: String
  },
  methods: {
    SignUp () {
      const user = {
        id: Math.round(Math.random() * 100),
        login: document.querySelector('[type="email"]').value,
        password: document.querySelector('[type="password"]').value,
        role: document.querySelector('select').value
      }
      if (user.password === document.querySelectorAll('[type="password"]')[1].value && user.password !== '' && user.login !== '') {
        this.$store.dispatch('SignUp', user).then(() => this.$router.push('/'))
        this.$parent.close()
      }
    }
  }
}
</script>
