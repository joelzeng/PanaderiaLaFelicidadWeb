<template>
  <v-container fluid class="about_container">
    <v-row>
      <v-col class="md6"> asdfasdf</v-col>

      <v-col class="md6">
        <!-- <GmapMap
          :center="{ lat: 8.879312, lng: -79.782865 }"
          :zoom="17"
          map-type-id="terrain"
          style="width: 350px; height: 300px"
        >
          <GmapMarker
            :position="{ lat: 8.879312, lng: -79.782865 }"
            :clickable="true"
            @click="getGoogleDirections"
          />
        </GmapMap> -->
        <v-img
          :src="mapImg"
          @click="getGoogleDirections"
          width="350px"
          class="google-map"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import map from "../assets/map.png";

export default {
  name: "About",
  data() {
    return {
      mapImg: map,
    };
  },
  methods: {
    getGoogleDirections() {
      window.location.href =
        "https://www.google.com/maps/dir//8.8792798,-79.7828289/@8.8791877,-79.7832593,20.26z";
    },
  },
};
</script>

<style scoped>
.about_container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.google-map {
  cursor: pointer;
}
</style>
