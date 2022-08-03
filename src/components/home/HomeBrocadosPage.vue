<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6" >
         <CarrouselsPedidosBrocados/>
        </v-col>

        <v-col cols="12" lg="5" class="text-center ml-4">
         <h1>Login</h1>
         <LoginBrocadosPage/>
        </v-col>
         
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import CarrouselsPedidosBrocados from '../carrousels/CarrouselsPedidosBrocados.vue';
import LoginBrocadosPage from '../login/LoginBrocadosPage.vue'

export default {
  name: "HomeBrocadosPage",
  components:{
    CarrouselsPedidosBrocados,
    LoginBrocadosPage,

  },
}
</script>

<style>
</style>