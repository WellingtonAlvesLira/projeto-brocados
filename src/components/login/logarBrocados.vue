<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
   
    <v-text-field
      v-model="senha"
      :rules="senhaRules"
      label="Senha"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Acessar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>
    <p class="mt-3">É novo por aqui?</p>
    <CadastrarBrocados/>
  </v-form>
</template>



<script>
import CadastrarBrocados from './CadastrarBrocados.vue';
export default {
  name: "LoginBrocados",
  components: {
    CadastrarBrocados,
  },
   data: () => ({
    
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
};
</script>

<style>
</style>