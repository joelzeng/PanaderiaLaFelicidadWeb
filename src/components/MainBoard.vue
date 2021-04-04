<template>
  <v-carousel
    :height="isMobile ? 500 : 200"
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
import mainBanner from "../assets/main_banner.png";

export default {
  name: "MainBoard",
  data() {
    return {
      image: bakeryMain,
      images: [
        { src: mainBanner },
        { src: bakeryMain },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
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


