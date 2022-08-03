<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>PEDIDOS DE CLIENTES</v-toolbar-title>
        <v-divider class="mx-5" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="400">
          <v-card>
            <v-card-title class="text-h6" color="green">
              Pedido cancelado com sucesso.
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                Fechar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green" dark v-bind="attrs" v-on="on">
            status  
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(s, i) in status" :key="i" @click="atualizarStatus(item.id, s.tipo)">
            <v-list-item-title>{{ s.tipo }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn small @click="deletePedido(item.id), (dialog = true)" class=" ml-2">
        <v-icon color="red">delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import api from "@/api/api.js";

export default {
  name: "dashboardBrocados",
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

    deletePedido(item) {
      if(this.dialog == false){
        this.delete(`/burgers/${item}`).then((resposta) => {
        if (resposta.data) {
          this.listarPedidos();
        }
      });

      }

    },

    atualizarStatus(itemId,statusTipo){
       this.patch(`/burgers/${itemId}`, {statusTipo})
      .then(() => {
        this.listarPedidos()
          console.log('Usuário atualizado com sucesso')
      })
      .catch((error) => {
          console.log(error);
      });
  
    }

  },
};
</script>


<style>
</style>