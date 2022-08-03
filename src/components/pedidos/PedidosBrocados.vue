<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" lg="12">
          <h1 class="text-center">Gerenciar Pedidos</h1>
          <dashaboardBrocados/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import dashaboardBrocados from '../dashboard/dashaboardBrocados.vue';
export default {
  name:'PedidosBrocados',
  components:{
    dashaboardBrocados
  }
};
</script>

<style scoped>
</style>
