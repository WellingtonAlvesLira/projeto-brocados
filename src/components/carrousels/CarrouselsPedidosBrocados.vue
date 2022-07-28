<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
export default{
    name: 'CarrouselsPedidosBrocados',
     data () {
      return {
        items: [
          {
            src: 'https://gkpb.com.br/wp-content/uploads/2016/08/novos-sanduiches-picanha-fanaticos-bacon-queijo-desaque-blog-gkpb.jpg',
          },
          {
            src: 'https://s2.glbimg.com/tMSGmpZFixrP_56ywnwTqxj1yBw=/620x455/e.glbimg.com/og/ed/f/original/2021/07/21/receita-hamburguer-frango-cebola-roxa-maionese-verde.jpg',
          },
          {
            src: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/dd/ac/e1/container-burger-3-hamburguer.jpg',
          },
          {
            src: 'https://fastly.4sqi.net/img/general/600x600/24959745_K0VEj7rIuY-C4IVKFToNxfJJabJfoDtPhSY_9t7RdiQ.jpg',
          },
        ],
      }
    },
}
</script>