<template>
  <!-- <v-app-bar color="primary"> -->
  <!-- Desktop v-if="!isMobile"-->
  <v-toolbar color="primary" height="100px">
    <v-toolbar-title>
      <v-img :src="logo"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        text
        class="test"
        v-for="item in menuItems"
        :key="item.title"
        v-on:click="navigateTo(item.id)"
      >
        <v-icon class="test" left>mdi-{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <!-- <v-container>
        <v-container>
          <v-row class="text-center">
            <v-col class="mb-2 header-menu-selection">Cakes</v-col>
            <v-col class="mb-2 header-menu-selection">Galeria</v-col>
            <v-col class="mb-2 header-center-text">
              <v-img :src="logo"></v-img>
            </v-col>
            <v-col class="mb-2 header-menu-selection">Contacto</v-col>
            <v-col class="mb-2 header-menu-selection">Localizacion</v-col>
          </v-row>
        </v-container>
      </v-container> -->
  <!-- <v-toolbar color="primary" :src="logo"> </v-toolbar> -->

  <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
  <!-- Mobile -->
  <!-- <template v-else>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </template> -->
  <!-- </v-app-bar> -->
</template>

<script>
import logo from "../assets/la_felicidad_logo.png";

export default {
  name: "Header",
  data() {
    return {
      logo: logo,
      menuItems: [
        { title: "Menu", icon: "silverware", id: "Menu" },
        { title: "Galeria", icon: "image", id: "Gallery" },
        { title: "Contacto", icon: "account", id: "About" },
        { title: "Localizacion", icon: "map-marker", id: "About" },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  methods: {
    navigateTo(id) {
      console.log(id);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.header-center-text {
  background-color: white;
  margin-top: 40px;
  border-style: double;
}

.header-menu-selection {
  padding-top: 50px;
  margin-bottom: -20px;
}

.header-border-bottom-double {
  border-bottom: double;
}

.test {
  color: #452e20 !important;
}
</style>
