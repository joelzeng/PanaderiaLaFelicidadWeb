<template>
  <v-container fluid class="gallery">
    <v-row justify="center" class="text-center">
      <v-col cols="12" class="gallery_title">Galeria</v-col>
    </v-row>
    <v-container :class="isMobile ? '' : 'gallery-inner'">
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>

<style scoped>
.gallery {
  background: #f4f1da;
}

.gallery_title {
  font-size: 3rem;
}

.gallery-inner {
  width: 75%;
}
</style>

