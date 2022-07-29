<!--Template é uma tag essencial, ela representa um novo component-->
<template>
  <v-container class="fluid mt-5">
    <v-row class="justify-center">

      <v-alert dense text type="success" v-model="ShowMenssagem">
        {{ msg }}
        <v-btn text @click="ShowMenssagem = false" color="red"> Fechar </v-btn>
      </v-alert>

      <v-col col="12" md="4" lg="8" class="text-center">

        <template>
          
          <v-form>

            <v-text-field
              v-model="Burger.nome"
              label="Digite o seu nome"
            ></v-text-field>

            <label for="pao" id="text-opc">Escolha o pão</label>
            <select
              id="pao"
              v-model="Burger.pao"
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
              v-model="Burger.carne"
            >
              <option v-for="(carne, i) in carnes" :key="i">
                {{ carne.tipo }}
              </option>
            </select>

            <label for="pao" id="text-opc">Selecione os opcionais:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Burger.opcionais"
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
        </v-col
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
    Burger: {
      nome: "",
      pao: "",
      carne: "",
      opcionais: "",
    },

    paes: [],
    carnes: [],
    opcionaisdata: [],
    msg: "",

    ShowMenssagem: false,
  }),

  methods: {
    fazer_pedido() {
      if (this.Burger.nome == "") {
        alert("O seu nome é obrigatório. Preencha!");
        this.ShowMenssagem = false;
      } else if (this.Burger) {
        this.post("/burgers", this.Burger).then((resposta) => {
          if (resposta.data) {
            this.msg = "Pedido salvo com sucesso";
            this.ShowMenssagem = true;
            this.Burger = "";
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
