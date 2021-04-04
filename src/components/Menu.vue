<template>
  <v-container class="menu_container" fluid>
    <v-row justify="center" class="text-center">
      <v-col cols="12" class="menu_title">Menu</v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col md="4" :class="isMobile ? '' : 'menu_bread_img'"
        ><v-img height="325" :src="breadImg"></v-img
      ></v-col>
      <v-col md="7"
        ><div class="menu_inner_title">PAN</div>
        <div class="menu_inner_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has surviv
        </div></v-col
      >
    </v-row>
    <v-row justify="space-between" class="menu_cake_row">
      <v-col md="6" :class="isMobile ? '' : 'menu_inner_right'">
        <div class="menu_inner_title">CAKES</div>
        <div class="menu_inner_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has surviv
        </div>
      </v-col>
      <v-col md="4" :class="isMobile ? '' : 'menu_cake_img'"
        ><v-img height="325" :src="cakeImg"></v-img
      ></v-col>
    </v-row>
    <v-row justify="space-between" class="menu_juice_row">
      <v-col md="4" :class="isMobile ? '' : 'menu_juice_img'"
        ><v-img height="325" :src="juiceImg"></v-img
      ></v-col>
      <v-col md="7"
        ><div class="menu_inner_title">REFRESCOS</div>
        <div class="menu_inner_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has surviv
        </div></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import menuBread from "../assets/menu_pan.jpeg";
import menuCake from "../assets/menu_cake_2.jpeg";
import menuJuice from "../assets/menu_juice.jpeg";

export default {
  name: "Menu",
  data() {
    return {
      breadImg: menuBread,
      cakeImg: menuCake,
      juiceImg: menuJuice,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>

<style scoped>
.menu_title {
  font-size: 3rem;
}
.menu_container {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}
.menu_cake_row,
.menu_juice_row {
  margin-top: 2.5rem;
}

.menu_cake_row {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background: #f4f1da;
}

.menu_cake_img {
  margin-right: 2rem;
}

.menu_juice_img,
.menu_bread_img {
  margin-left: 1rem;
}

.menu_inner_title {
  font-size: 3rem;
}

.menu_inner_text {
  font-size: 1.4rem;
}

.menu_inner_right {
  margin-left: 5rem;
}
</style>
