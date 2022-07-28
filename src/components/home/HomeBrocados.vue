<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6" >
         <CarrouselsPedidosBrocados/>
        </v-col>

        <v-col cols="12" lg="6" class="text-center">
         <h1>Monte o seu Burger:</h1>
         <FormBrocados/>
        </v-col>
         
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import CarrouselsPedidosBrocados from '../carrousels/CarrouselsPedidosBrocados.vue';
import FormBrocados from '../form/FormBrocados.vue'

export default {
  name: "HomeBrocados",
  components:{
    CarrouselsPedidosBrocados,
    FormBrocados

  },
}
</script>

<style>
</style>