<template>
  <v-carousel
    :height="isMobile ? 400 : 500"
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(img, i) in images" :key="i" :src="img">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import bakeryMain from "../assets/bakery_main.jpeg";
import boardOne from "../assets/board_1.jpg";

export default {
  name: "MainBoard",
  data() {
    return {
      image: bakeryMain,
      images: [
        { src: bakeryMain },
        {
          src: boardOne,
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>


