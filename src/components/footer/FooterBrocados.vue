<template>
  <v-footer dark padless class="justify-center">
    <v-card flat tile class="white--text text-center">
      <v-card-text class="white--text p6">
        "Ser a mais prazerosa experiência de alimentação."
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Brocados</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBrocado",
};
</script>