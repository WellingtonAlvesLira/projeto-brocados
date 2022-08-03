<template>
  <v-card>
    <v-app-bar
      fixed
      color="black"
      dark

      prominent

    >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
       <img id="img_nav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKGDeCo-Pm8cjvePh02Ghzcb0Vl8TIgesT4yw7fbiMM9w2ggadjtKbqw8VTvQ07591mk&usqp=CAU" alt="">
      <v-toolbar-title>APP BROCADOS</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="page_home()">HOME</v-tab>

          <v-tab @click="page_pedido()">PEDIDOS</v-tab>

        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      max-height="300"
    >
      <v-container style="height: 800px;"></v-container>
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

#img_nav{
  width: 100px;
}

.v-tab {
  background: rgba(230, 195, 79, 0.253);
  color: rgb(243, 239, 14);
}
</style>