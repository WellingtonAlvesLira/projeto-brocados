<!--Template é uma tag essencial, ela representa um novo component-->
<template>
<v-app>
  <v-container class="fluid mt-5">
    <v-row class="justify-center">

      <msgBrocados :msg="msg" :numberPedido="numberPedido" v-show="msg"/>
      <v-toolbar-title class="h2 text-center">Monte o seu Burger:</v-toolbar-title>
      <v-col col="12" md="4" lg="8" class="text-center">
        <template>
          <v-form @submit.prevent="fazer_pedido(e)">
            <v-text-field
              v-model="burger_pedido.nome"
              label="Digite o seu nome"
            ></v-text-field>

            <label for="pao" id="text-opc">Escolha o pão</label>
            <select
              id="pao"
              v-model="burger_pedido.pao"
              class="form-select"
              aria-label="Default select example"
              placeholder="Escolha o pão"
            >
              <option v-for="(pao, i) in paes" :key="i">{{ pao.tipo }}</option>
            </select>

            <label for="pao" id="text-opc">Escolha a carne</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="burger_pedido.carne"
            >
              <option v-for="(carne, i) in carnes" :key="i">
                {{ carne.tipo }}
              </option>
            </select>

            <label for="pao" id="text-opc">Selecione os opcionais:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="burger_pedido.opcionais"
            >
              <option v-for="(opc, i) in opcionaisdata" :key="i">
                {{ opc.tipo }}
              </option>
            </select>

            <v-btn color="success" class="mr-4 mt-3" @click="fazer_pedido">
              Enviar Pedido
            </v-btn>
          </v-form>
        </template>
      </v-col></v-row
    ></v-container
  >
  </v-app>
</template>

<script>
import api from "@/api/api.js";

import msgBrocados from '@/components/feedback/msgBrocados.vue'

export default {
  name: "CriarBurger",
  components:{
    msgBrocados,
  },
  mixins: [api],
  data: () => ({
    //Dados a serem enviados de uma vez só para o back
    burger_pedido: {
      nome: "",
      pao: "",
      carne: "",
      status: "Solicitado",
      opcionais: "",
    },

    paes: [],
    carnes: [],
    opcionaisdata: [],

    msg: "",
    numberPedido: "",

  }),

  methods: {
    fazer_pedido(e) {
      e.preventDefault()
      //Validação de dados
      if (this.burger_pedido.nome == "") {
        alert("O seu nome é obrigatório. Preencha!");
        this.ShowMenssagem = false;
      } else if (this.burger_pedido) {
        //enviando dados para o back.
        this.post("/burgers/", this.burger_pedido).then((resposta) => {
          if (resposta.data) {
            this.numberPedido = Math.floor(Math.random() * 9000 + 1);
            this.msg = `Pedido realizado com sucesso/ CÓD: ${this.numberPedido}`;
            setTimeout(() => this.msg = "", 4000);

          }
        });
      }
    },
  },

  created() {
    //Listando dados do backend para a aplicação
    this.get("/ingredientes").then((resposta) => {
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
