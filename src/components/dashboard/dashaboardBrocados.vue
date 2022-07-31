<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"

  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>PEDIDOS DE CLIENTES</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Tem certeza ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn
        small
        @click="deleteItem(item)"
      >
        Status
      </v-btn>
      <v-btn
        small
        @click="deleteItem(item)"
      >
        Cancelar
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
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Nome', value: 'nome' },
        { text: 'Pãp', value: 'pao' },
        { text: 'Carne', value: 'carne' },
        { text: 'Opcionais', value: 'opcionais' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
  
    }),

    // watch: {
    //   dialog (val) {
    //     val || this.close()
    //   },
    //   dialogDelete (val) {
    //     val || this.closeDelete()
    //   },
    // },

    created () {
      //listando pedidos que foram realizados pelo usuário.
      this.get("/burgers").then((resposta) => {
      this.desserts = resposta.data;
      console.log(this.desserts)
    });
    },

    methods: {

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    },
};
</script>

<style>
</style>