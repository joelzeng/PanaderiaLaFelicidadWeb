<template>
  <v-app>
    <Header />

    <v-main>
      <MainBoard />
      <section id="Cakes">
        <Cakes />
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
import Cakes from "./components/Cakes";
import About from "./components/About";

export default {
  name: "App",

  components: {
    Header,
    MainBoard,
    Footer,
    Gallery,
    Cakes,
    About,
  },

  data: () => ({
    //
  }),
};
</script>
