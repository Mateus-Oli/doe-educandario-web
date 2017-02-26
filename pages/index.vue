<template>
  <md-layout md-column md-gutter>

    <md-layout md-column md-gutter>
      <md-toolbar class="doe-navbar">
        <h1 class="md-title">Doe Educandario</h1>
      </md-toolbar>
    </md-layout>

    <section>
      <form @submit.prevent="makeLogin(username, password)">
        <md-card>

          <md-card-header>
          <div class="md-title">Login</div>
          <div class="md-subhead">Informe seu usuario e senha</div>
          </md-card-header>

          <md-card-content>

            <md-input-container>
              <label>Usuario</label>
              <md-input v-model="username"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
              <label>Senha</label>
              <md-input type="password" v-model="password"></md-input>
            </md-input-container>

          </md-card-content>

          <md-card-actions>
            <md-button @click.native="resetPassword()">Esqueci minha senha</md-button>
            <md-button type="submit">Entrar</md-button>
          </md-card-actions>

        </md-card>
      </form>
    </section>

    <md-dialog-prompt
      md-title="Recuperar Senha"
      md-ok-text="Enviar"
      md-cancel-text="Cancelar"
      v-model="email"
      md-content-html="Informe seu email para enviarmos sua nova senha:"
      md-input-placeholder="Email"
      @close="sendEmail"
      ref="reset">
      Insira seu Email
    </md-dialog>

  </md-layout>
</template>

<script>

import { login, reset } from '../services/login.service'

export default {
  head: {
    title: 'Login'
  },

  data() {

    return {
      username: '',
      password: '',
      email: ''
    }
  },

  methods: {
    makeLogin(username, password) {
      login(username, password).catch((err) => {
        console.log(err)
      })
    },
    resetPassword() {
      this.$refs['reset'].open();
    },
    sendEmail(result) {
      console.log(this.email)
      if(result !== 'ok') return;
      return reset(this.email)
    }
  }
}

</script>

<style lang="scss">

body {
  background: lightgrey !important;
}

.doe-navbar {
  background: #24292e !important;
  box-shadow: 0 0 1px darkgreen inset !important;
}

section {
  padding: 30px;
}

</style>
