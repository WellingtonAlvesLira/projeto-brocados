<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      src="https://thumbs.dreamstime.com/b/burger-e-cerveja-panorama-hamb%C3%BArguer-com-carne-de-bovino-queijo-cebola-tomate-salada-verde-uma-vista-lateral-sobre-fundo-escuro-200271972.jpg"
    >
      <template v-slot:extension>
        <v-tabs align-with-title class="mr-6 mb-4">
          <v-spacer></v-spacer>
          <v-toolbar-title class="title-app">APP BROCADOS</v-toolbar-title>
          <v-tab @click="page_home">HOME</v-tab>
          <v-tab @click="page_pedido">PEDIDOS</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet max-height="150">
      <v-container style="height: 800px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "NavBarBrocados",
  methods: {
    page_home() {
      this.$router.push("/");
    },
    page_pedido() {
      this.$router.push("/pedidos-brocados");
    },
  },
};
</script>

<style scoped>
.title-app {
  color: rgb(243, 239, 14);
  margin-right: 25px;
  font-family: fantasy;
}

.v-tab {
  background: rgba(230, 195, 79, 0.253);
  color: rgb(243, 239, 14);
}
</style>