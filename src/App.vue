<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <ScrollTopButton />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ScrollTopButton from "./components/ScrollTopButton.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    ScrollTopButton,
  },
};
</script>

<style scoped>
@import "./App.css";
</style>
