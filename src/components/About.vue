<template>
  <v-container class="about_container">
    <v-row>
      <v-col class="md4">
        <div class="about-title">Contactanos</div>
        <div class="about-text">Tienes alguna pregunta?</div>
        <div>
          <p>Nosotros tenemos respuestas</p>
          Envianos un email a panaderialafelicidad@gmail.com
        </div>
        <div class="about-button">
          <v-btn color="primary">
            <a href="mailto:joelzeng@hotmail.com" class="about-button-text"
              >Enviar Email</a
            >
          </v-btn>
        </div>
        <div class="about-logo">
          <v-img :src="logoImg" width="250px"></v-img>
        </div>
      </v-col>

      <v-col class="md4">
        <div class="about-title">Horario</div>
        <div class="about-text-schedule">
          <p>Lunes: 4:00 AM - 10:00 PM</p>
          <p>Martes: 4:00 AM - 10:00 PM</p>
          <p>Miercoles: 4:00 AM - 10:00 PM</p>
          <p>Jueves: 4:00 AM - 10:00 PM</p>
          <p>Viernes: 4:00 AM - 10:00 PM</p>
          <p>Sabado: 4:00 AM - 10:00 PM</p>
          <p>Domingo: 4:00 AM - 10:00 PM</p>
        </div>
        <div class="about-button">
          <v-btn color="primary" v-on:click="triggerPhoneCall()">
            <span class="about-button-text">Llamar al 253-3321 </span></v-btn
          >
        </div>
      </v-col>

      <v-col class="md4">
        <div class="about-title">Direccion</div>
        <v-img
          :src="mapImg"
          @click="getGoogleDirections"
          width="240px"
          class="google-map"
        >
        </v-img>
        <div class="about-button">
          <v-btn color="primary" v-on:click="getGoogleDirections()">
            <span class="about-button-text">Obtener direccion </span></v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import map from "../assets/map.png";
import logo from "../assets/la_felicidad_logo.png";

export default {
  name: "About",
  data() {
    return {
      mapImg: map,
      logoImg: logo,
    };
  },
  methods: {
    getGoogleDirections() {
      window.location.href =
        "https://www.google.com/maps/dir//8.8792798,-79.7828289/@8.8791877,-79.7832593,20.26z";
    },
    triggerPhoneCall() {
      window.open("tel:2533321");
    },
  },
};
</script>

<style scoped>
p {
  line-height: 32px; /* within paragraph */
  margin-bottom: -0.17rem; /* between paragraphs */
}

.about_container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.google-map {
  cursor: pointer;
  margin-top: 10px;
}

.about-title {
  color: #452e20;
  font-size: 1.5rem;
  font-weight: bolder;
}

.about-text {
  margin-top: 0.8rem;
  font-size: 1.2rem;
}
.about-button {
  margin-top: 1rem;
}
.about-button-text {
  color: black;
}
.about-logo {
  margin-top: 2rem;
}
</style>