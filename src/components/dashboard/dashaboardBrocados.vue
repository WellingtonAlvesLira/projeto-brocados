<template>
  <v-app>
     <v-container fluid>
        <v-row>
            <v-col cols="12" lg="12">
             <h1>Dashboard componente</h1>
              <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
            </v-col>
        </v-row>

     </v-container>
  </v-app>
</template>

<script>
import api from "@/api/api.js";

export default {
    name: 'dashboardBrocados',
     mixins: [api],
     data () {
      return {
        search: '',
        headers: [
          {
            text: 'Cliente',
            align: 'start',
            filterable: false,
            value: 'nome',
          },
          { text: 'Pão', value: 'pao' },
          { text: 'Carne', value: 'carne' },
          { text: 'Opcionais', value: 'opcionais' },
          { text: 'Ações', value: 'status' },
        ],
        desserts: [],
      }
    },
      created() {
    //Listando dados do backend para a aplicação
    this.get("/burgers").then((resposta) => {
      this.desserts = resposta.data;
      console.log(this.desserts)

    });
  },

}
</script>

<style>

</style>