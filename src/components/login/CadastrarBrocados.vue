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
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="senha1"
              :rules="senhaRules"
              label="Senha"
              required
            ></v-text-field>
            <v-text-field
              v-model="senha2"
              :rules="senhaRules"
              label="Repita a senha"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
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
export default {
  name: "CadastrarBrocados",
  components: {},
  data() {
    return {
      dialog: false,
      valid: true,
      email: "",
      senha: "",
      emailRules: [
        (v) => !!v || "O e-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser Válido",
      ],
      senhaRules: [
        (v) => !!v || "Senha obrigatória",
      ]
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>
</style>