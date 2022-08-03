<template>
  <div id="app" class="justify-center">
  <v-app id="inspire">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
      class="p-6"
    >
      <v-carousel-item
         v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </v-app>
</div>

</template>


<script>
export default {
  name: "CarrouselsPedidosBrocados",
  data() {
    return {
      items: [
        {
         src: "https://i.pinimg.com/originals/ed/4d/23/ed4d23b609435e647c15cfe0dcf4c5d6.png", 
        },
        {
          src: "https://media.istockphoto.com/photos/burger-on-black-background-picture-id1240080013?k=20&m=1240080013&s=170667a&w=0&h=czGhWrlr7iCQ-N9MnuRTWxtZPhMpYDP1f6wzEpD3Jb0=",
        },
        {
          src: "https://media-cdn.tripadvisor.com/media/photo-s/1a/dd/ac/e1/container-burger-3-hamburguer.jpg",
        },
        {
          src: "https://files.menudino.com/cardapios/7774/logo.png",
        },
      ],
    };
  },
};
</script>