<template>
  <v-alert
   dense
   text
   type="success"
  >
   {{msg}}
  </v-alert>
</template>

<script>
export default {
    name: "msgBrocados",
    props:{
        msg: String,
    }

}
</script>

<style>

</style>