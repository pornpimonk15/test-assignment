<template>
  <v-container class="text-center">
    <h1 class="display-2 text-grey mb-10">Gallery</h1>
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
          <v-card class="fruit-card">
            <v-img
              :src="fruit.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
              height="200px"
            >
              <v-card-title v-text="fruit.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
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
          src: `${require("../assets/images/fruit-01.jpg")}`,
        },
        {
          title: "Mixed Fruit",
          src: `${require("../assets/images/fruit-02.jpg")}`,
        },
        {
          title: "Strawberry",
          src: `${require("../assets/images/fruit-03.jpg")}`,
        },
        {
          title: "Rambutan",
          src: `${require("../assets/images/fruit-04.jpg")}`,
        },
        {
          title: "Avocado",
          src: `${require("../assets/images/fruit-05.jpg")}`,
        },
        {
          title: "Lychee",
          src: `${require("../assets/images/fruit-06.jpg")}`,
        },
        {
          title: "Kiwi",
          src: `${require("../assets/images/fruit-07.jpg")}`,
        },
        {
          title: "Coconut",
          src: `${require("../assets/images/fruit-08.jpg")}`,
        },
        {
          title: "Mandarin Orange",
          src: `${require("../assets/images/fruit-09.jpg")}`,
        },
        {
          title: "Watermelon ",
          src: `${require("../assets/images/fruit-10.jpg")}`,
        },
        {
          title: "Red Delicious Apple",
          src: `${require("../assets/images/fruit-11.jpg")}`,
        },
        {
          title: "Apple",
          src: `${require("../assets/images/fruit-12.jpg")}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.fruit-card {
  border-radius: 15px !important;
}
</style>
