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
            <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>
            <MsgBrocados :msg="msg" v-show="msg" class="mt-4" />
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
import MsgBrocados from "../feedback/msgBrocados.vue";

export default {
  name: "CadastrarBrocados",
  components: { MsgBrocados },
  mixins: [api],
  data() {
    return {
      register_user: {
        email: "",
        senha: "",
      },
      users: [],
      msg: "",
      dialog: false,
      valid: true,
      emailRules: [
        (v) => !!v || "O e-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser Válido",
      ],
      senhaRules: [(v) => !!v || "Senha obrigatória"],
    };
  },

  created() {
    this.list_users();
  },
  methods: {
  registrar_user(e) {
    let existeEmail = false;

    if (this.$refs.form.validate()){
      this.users.forEach(users => {        
        if (users.email == this.register_user.email){
            existeEmail = true;
        }
      });
      if (existeEmail == true) {
        alert('existe email')
      }
       
      else if(existeEmail == false){
          this.post("/users/", this.register_user).then((resposta) => {
          if (resposta.data) {
            this.msg = "Cadastrado realizado com sucesso";
            setTimeout(() => this.msg = "", 4000);
            setTimeout(() => this.default = false, 6000);

          }
        });
      }
    } else {
      alert('preencha os campos!!')
    }
  },

    reset() {
      this.$refs.form.reset();
    },

    list_users() {
      this.get("/users/").then((resposta) => {
        this.users = resposta.data;
      });
    },

    showMsg(){
       
    }
  },
};
</script>

<style>
</style>