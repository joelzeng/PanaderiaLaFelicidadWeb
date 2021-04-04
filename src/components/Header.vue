<template>
  <!-- Desktop -->
  <v-toolbar color="primary" height="100px" v-if="!isMobile">
    <v-toolbar-title>
      <v-img :src="logo"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        text
        v-for="item in menuItems"
        :key="item.title"
        v-on:click="navigateTo(item.id)"
      >
        <v-icon class="icon-color" left>mdi-{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <!-- Mobile -->
  <div v-else>
    <!-- <span class="header-mobile-title">La Felicidad</span> -->
    <v-container class="header-mobile" fluid>
      <v-row>
        <v-col cols="2">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                class="header-mobile-icon"
                v-on:click="openMenu"
                v-click-outside="closeMenu"
              >
                <v-icon size="35">{{
                  isMenuOpen ? "mdi-close" : "mdi-menu"
                }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in menuItems" :key="index">
                <v-list-item-title v-on:click="navigateTo(item.id, true)">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu></v-col
        >

        <v-col cols="10" class="header-mobile-logo">
          <v-img :src="logo"></v-img
        ></v-col>
      </v-row>
    </v-container>
  </div>
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
        { title: "Direccion", icon: "map-marker", id: "About" },
      ],
      isMenuOpen: false,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  methods: {
    navigateTo(id, mobile = false) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      if (mobile) this.closeMenu();
    },
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.$emit("input", false);
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

.icon-color {
  color: #452e20 !important;
}

.header-mobile-title {
  color: #452e20;
  margin-left: 0.5rem;
  font-size: 1.5rem;
}

.header-mobile-icon {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
}

.header-mobile-logo {
  margin-top: 0.1rem;
}
</style>
