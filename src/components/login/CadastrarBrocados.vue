<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Cadastrar </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Fazer Cadastro
        </v-card-title>

        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="registrar_user(e)"
          >
            <v-text-field
              v-model="register_user.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="register_user.senha"
              :rules="senhaRules"
              label="Senha"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="registrar_user"
            >
              Cadastrar
            </v-btn>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";

export default {
  name: "CadastrarBrocados",
  mixins: [api],
  data() {
    return {
      register_user: {
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
    async registrar_user(e) {
      this.$refs.form.validate();
      e.preventDefault();
      this.post("/users/", this.register_user)
        .then((resposta) => {
          if (resposta.status == "201") {
            console.log("Usuário criado com sucesso!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>