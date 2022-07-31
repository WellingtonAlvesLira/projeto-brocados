<template>
  <v-app>
    <v-container fluid>
      <v-row class="justify-center">
        <v-col cols="12" md="4" lg="12">
          <h1>Gerenciar Pedidos</h1>
          <dashaboardBrocados/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import dashaboardBrocados from '../dashboard/dashaboardBrocados.vue';
export default {
  name:'dashaboarBrocados',
  components:{
    dashaboardBrocados
  }
};
</script>

<style scoped>
</style>
