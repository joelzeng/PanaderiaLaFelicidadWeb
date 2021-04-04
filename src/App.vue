<template>
  <v-app>
    <Header />

    <v-main>
      <MainBoard />
      <section id="Menu">
        <Menu />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="About">
        <About />
      </section>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import About from "./components/About";

export default {
  name: "App",

  components: {
    Header,
    MainBoard,
    Footer,
    Gallery,
    Menu,
    About,
  },

  data: () => ({
    //
  }),
};
</script>
