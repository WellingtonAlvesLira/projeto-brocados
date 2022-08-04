<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="logar_user(e)"
  >
    <v-text-field
      v-model="logar.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="logar.senha"
      :rules="senhaRules"
      label="Senha"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="logar_user">
      Acessar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>
    <p class="mt-3">É novo por aqui?</p>
    <CadastrarBrocados />
  </v-form>
</template>



<script>
import CadastrarBrocados from "./CadastrarBrocados.vue";

import api from "@/api/api.js";

export default {
  name: "LoginBrocados",
  mixins: [api],
  components: {
    CadastrarBrocados,
  },
  data() {
    return {
      logar: {
        email: "",
        senha: "",
      },

      dialog: false,
      valid: true,
      emailRules: [
        (v) => !!v || "O e-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser Válido",
      ],
      senhaRules: [(v) => !!v || "Senha obrigatória"],
    };
  },

  methods: {
  async logar_user(e) {
      this.$refs.form.validate();
      e.preventDefault()
      this.post("/login/", this.logar)
        .then((resposta) => {
          console.log(resposta.data);
          this.dialog = false
        const token = resposta.token;
        const user = resposta.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push("/criar-burger");
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>