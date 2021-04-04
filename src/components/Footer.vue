<template>
  <v-footer color="primary">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        class="text-color navigation-btn"
        text
        rounded
        v-on:click="navigateTo(item.id)"
      >
        {{ item.title }}
      </v-btn>
      <v-col class="primary py-4 text-center text-color disclaimer" cols="12">
        <strong> Copyrights © Panaderia y Dulceria La Felicidad</strong>
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      menuItems: [
        { title: "Menu", icon: "cake-variant", id: "Menu" },
        { title: "Galeria", icon: "image", id: "Gallery" },
        { title: "Contacto", icon: "account", id: "About" },
        { title: "Localizacion", icon: "map-marker", id: "About" },
      ],
    };
  },
  methods: {
    navigateTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.text-color {
  color: #452e20 !important;
}
.disclaimer {
  font-size: 0.65rem;
}
.navigation-btn {
  font-size: 0.55rem;
}
</style>


