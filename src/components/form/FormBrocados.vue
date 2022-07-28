<!--Template é uma tag essencial, ela representa um novo component-->
<template>
  <v-container class="fluid mt-5">
    <v-row class="justify-center">
      <v-col col="12" md="4" lg="8" class="text-center">
        <template>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="nome"
              :counter="10"
              :rules="regraNome"
              label="Digite o seu nome"
              required
            ></v-text-field>
             
            <label for="pao"  id="text-opc">Escolha o pão</label>
            <select id="pao" v-model="pao" class="form-select" aria-label="Default select example" placeholder="Escolha o pão">
              <option v-for="(pao,i) in paes" :key="i" >{{pao.tipo}}</option>
            </select>
             
            <label for="pao"  id="text-opc">Escolha a carne</label>
            <select class="form-select" aria-label="Default select example" v-model="carne">
              <option v-for="(carne,i) in carnes" :key="i" >{{carne.tipo}}</option>
            </select>

            <p id="text-opc">Selecione os opcionais:</p>
            <div class="p3 ml-2 d-inline" v-for="(opc,i) in opcionaisdata" :key="i">
              <input type="checkbox" v-model="opcionais"/>
              <span>{{opc.tipo}}</span>
            </div>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-3"
              @click="validate"
            >
              Enviar Pedido
            </v-btn>

            <v-btn color="error" class="mr-4 mt-3" @click="reset">
              Limpar
            </v-btn>
          </v-form>
        </template></v-col
      ></v-row
    ></v-container
  >
</template>

<script>
import api from "@/api/api.js";

export default {
  name: "FormBrocados",
  mixins: [api],
  data: () => ({
    nome: null,
    paes: [],
    carnes: [],
    pao: null,
    carne: null,
    opcionais: null,
    opcionaisdata: [],
    status: "Solicitado",
    msg: null,
    valid: true,
   
    regraNome: [
      (v) => !!v || "A sua identificação é obrigatória.",
      (v) => (v && v.length <= 10) || "Nome com apenas 10 caracter",
    ],

  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },

  created() {
    this.get("http://localhost:3000/ingredientes").then((resposta) => {
      this.paes = resposta.data.paes;
      this.carnes = resposta.data.carnes;
      this.opcionaisdata = resposta.data.opcionais;
    });
  },
};
</script>

<style scoped>
#text-opc {
  color: black;
  font-weight: bold;
}
label {
  margin-left: 6px;
  padding: 10px;
}
</style>
