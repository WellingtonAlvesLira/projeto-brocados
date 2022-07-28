<template>
  <v-app class="blue-grey lighten-1">
    <NavBarBrocados />
    <router-view></router-view>
    <FooterBrocados />
  </v-app>
</template>

<script>
import NavBarBrocados from "@/components/navbar/NavBarBrocados.vue";
import FooterBrocados from "@/components/footer/FooterBrocados.vue";

export default {
  name: "App",
  components: {
    NavBarBrocados,
    FooterBrocados,
  },
};
</script>

<style scoped>

</style>
