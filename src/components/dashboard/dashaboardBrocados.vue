<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title >PEDIDOS DE CLIENTES</v-toolbar-title>
        <v-divider class="mx-5" inset vertical></v-divider>
        <v-spacer></v-spacer>
         <msgBrocados :msg="msg" v-show="msg"/>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> status </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(s, i) in status"
            :key="i"
            @click="atualizarStatus(item.id, s.tipo)"
          >
            <v-list-item-title>{{ s.tipo }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn small @click="deletePedido(item.id, item.nome), (dialog = true)" class="ml-2">
        <v-icon color="red">delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import api from "@/api/api.js";

import msgBrocados from '@/components/feedback/msgBrocados.vue'

export default {
  name: "dashboardBrocados",
  components:{
    msgBrocados
  },
  mixins: [api],
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Nome", value: "nome" },
      { text: "Pão", value: "pao" },
      { text: "Carne", value: "carne" },
      { text: "Opcionais", value: "opcionais" },
      { text: "Status", value: "statusTipo" },
      { text: "AÇÕES", value: "actions", sortable: false },
    ],
    desserts: [],
    status: [],
    msg: ""
  }),

  created() {
    //listando pedidos que foram realizados pelo usuário.
    this.listarPedidos();
    this.listarStatus();
  },

  methods: {
    listarStatus() {
      this.get("/status").then((resposta) => {
        this.status = resposta.data;
      });
    },
    listarPedidos() {
      this.get("/burgers").then((resposta) => {
        this.desserts = resposta.data;
      });
    },

    deletePedido(itemId, itemNome) {
          this.delete(`/burgers/${itemId}`).then((resposta) => {
          if (resposta.data) {
            this.listarPedidos();
            this.msg = `Pedido ${itemId}, em nome de ${itemNome} cancelado com sucesso!`
            setTimeout(() => this.msg = "", 6000);
          }
        });
    },

    atualizarStatus(itemId, statusTipo) {
      this.patch(`/burgers/${itemId}`, { statusTipo })
        .then(() => {
          this.listarPedidos();
           this.msg = `Status atualizado para : ${statusTipo}`
            setTimeout(() => this.msg = "", 4000);
          console.log("Status atualizado com sucesso");
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