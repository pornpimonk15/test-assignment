<template>
  <v-flex>
    <p class="aboute-me-title">Hobby</p>
    <div class="my-10">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="(hobby, index) in hobbies" :key="index">
          <v-card class="card hobby-card mx-2" :color="hobby.color">
            <v-img :src="hobby" width="100px"> </v-img>
            <v-card-title class="d-flex justify-center">
              <span> {{ hobby.title }}</span>
            </v-card-title>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      hobbies: [
        {
          title: "Movie",
          src: `${require("../assets/images/hobby/movie.png")}`,
          color: "bg-blue",
        },
        {
          title: "Paint",
          src: `${require("../assets/images/hobby/painting.png")}`,
          color: "bg-yellow",
        },
        {
          title: "Music",
          src: `${require("../assets/images/hobby/music-notes.png")}`,

          color: "bg-pink",
        },
        {
          title: "Sport",
          src: `${require("../assets/images/hobby/badminton.png")}`,
          color: "bg-blue",
        },
        {
          title: "Photography",
          src: `${require("../assets/images/hobby/photography.png")}`,
          color: "bg-pink",
        },
        {
          title: "Travel",
          src: `${require("../assets/images/hobby/travel-itinerary.png")}`,
          color: "bg-blue",
        },
        {
          title: "Hiker",
          src: `${require("../assets/images/hobby/hiker.png")}`,
          color: "bg-yellow",
        },
      ],
    };
  },
};
</script>
