<template>
  <v-container class="section-gallery text-center">
    <h1 class="gallery-title mb-10">Gallery</h1>
    <v-flex>
      <v-row dense>
        <v-col
          v-for="(fruit, index) in fruits"
          :key="index"
          class="pa-5"
          xs="12"
          sm="6"
          md="6"
          lg="3"
          xl="3"
        >
          <v-card
            class="fruit-card"
            @click="(dialog = !dialog), (fruitSelected = index)"
          >
            <v-img
              :src="fruit.src"
              class="fruit-img align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
            >
              <v-card-title v-text="fruit.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
    <v-dialog v-model="dialog" max-width="750">
      <v-card>
        <v-carousel hide-delimiters v-model="fruitSelected">
          <v-carousel-item
            v-for="(fruit, i) in fruits"
            :key="i"
            :src="fruit.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "GalleryView",
  data() {
    return {
      fruits: [
        {
          title: "Passion Fruit",
          src: `${require("../assets/images/fruits/fruit-01.jpg")}`,
        },
        {
          title: "Mixed Fruit",
          src: `${require("../assets/images/fruits/fruit-02.jpg")}`,
        },
        {
          title: "Strawberry",
          src: `${require("../assets/images/fruits/fruit-03.jpg")}`,
        },
        {
          title: "Rambutan",
          src: `${require("../assets/images/fruits/fruit-04.jpg")}`,
        },
        {
          title: "Avocado",
          src: `${require("../assets/images/fruits/fruit-05.jpg")}`,
        },
        {
          title: "Lychee",
          src: `${require("../assets/images/fruits/fruit-06.jpg")}`,
        },
        {
          title: "Kiwi",
          src: `${require("../assets/images/fruits/fruit-07.jpg")}`,
        },
        {
          title: "Coconut",
          src: `${require("../assets/images/fruits/fruit-08.jpg")}`,
        },
        {
          title: "Mandarin Orange",
          src: `${require("../assets/images/fruits/fruit-09.jpg")}`,
        },
        {
          title: "Watermelon ",
          src: `${require("../assets/images/fruits/fruit-10.jpg")}`,
        },
        {
          title: "Red Delicious Apple",
          src: `${require("../assets/images/fruits/fruit-11.jpg")}`,
        },
        {
          title: "Apple",
          src: `${require("../assets/images/fruits/fruit-12.jpg")}`,
        },
      ],
      dialog: false,
      fruitSelected: 0,
    };
  },
};
</script>

<style scoped>
@import "../assets/styles/gallery.css";
</style>
