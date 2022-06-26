<template>
  <div>
    <div class="section-header-about-me">
      <v-container class="text-center">
        <v-flex>
          <div>
            <v-avatar class="white--text" color="primary" size="190"
              ><img src="../assets/images/profile-1.jpg" alt="profile-1"
            /></v-avatar>

            <v-flex class="my-5 white--text">
              <h1>Pornpimon Khosanteea</h1>
              <h1>(Kook)</h1>
              <h2 class="text-yellow">I'm a Frontend Developer</h2>
            </v-flex>
            <v-flex
              style="
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
              "
            >
              <v-icon size="35">mdi-instagram</v-icon>
              <v-icon size="35">mdi-linkedin</v-icon>
              <v-icon size="35">mdi-github</v-icon>
            </v-flex>
          </div>
        </v-flex>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-flex class="pt-5">
          <p class="aboute-me-title">About Me</p>
          <v-row class="mt-3" justify="center" align="center">
            <v-col cols="12" xs="12" sm="5" md="4" lg="4" xl="4">
              <v-avatar class="profile-img-2" size="300"
                ><img src="../assets/images/profile-2.jpg" alt="profile-2"
              /></v-avatar>
            </v-col>
            <v-col cols="12" xs="12" sm="9" md="8" lg="8" xl="8">
              <h3 class="text-dark-blue font-weight-medium">
                A Frontend Developer with hands-on experience in programming web
                app utilizing Vue.js/React.js ecosystem, including coordinate,
                planning, execution and user support.
              </h3>
              <v-row class="text-start my-3">
                <v-col
                  class="about-me-content"
                  cols="12"
                  xs="12"
                  sm="6"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <v-icon>mdi-map-marker</v-icon>
                  <span class="body-1">Location : Chaiyaphum, Thailand</span>
                </v-col>
                <v-col
                  class="about-me-content"
                  cols="12"
                  xs="12"
                  sm="6"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <v-icon>mdi-calendar</v-icon>
                  <span class="body-1">Age : 25</span>
                </v-col>
                <v-col
                  class="about-me-content"
                  cols="12"
                  xs="12"
                  sm="6"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <v-icon>mdi-phone</v-icon>
                  <span class="body-1">Phone : 093-1317376</span>
                </v-col>
                <v-col
                  class="about-me-content"
                  cols="12"
                  xs="12"
                  sm="6"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <v-icon>mdi-email</v-icon>
                  <span class="body-1">Email : pornpimonk15@gmail.com</span>
                </v-col>
                <v-col class="text-center">
                  <v-divider class="mt-3 my-5" />
                  <v-btn
                    @click="downloadResume()"
                    class="white--text"
                    color="#E85B7D"
                    rounded
                    >Download Resume</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-flex class="pt-10">
            <p class="aboute-me-title">Skills</p>
            <v-row justify="center" align="center">
              <v-col
                v-for="(skill, index) in skills"
                :key="index"
                cols="4"
                xs="4"
                sm="2"
                md="2"
                lg="1"
                xl="1"
              >
                <v-img :src="skill.src" width="100"></v-img>
              </v-col>
            </v-row>
          </v-flex>
        </v-flex>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          label: "Vue.js",
          src: `${require("../assets/images/skills/vue-logo.png")}`,
        },
        {
          label: "React.js",
          src: `${require("../assets/images/skills/react-logo.png")}`,
        },
        {
          label: "Next.js",
          src: `${require("../assets/images/skills/nextjs-logo.png")}`,
        },
        {
          label: "javaScript",
          src: `${require("../assets/images/skills/javaScript-logo.png")}`,
        },
        {
          label: "typeScript",
          src: `${require("../assets/images/skills/typescript-logo.png")}`,
        },
        {
          label: "Firebase",
          src: `${require("../assets/images/skills/firebase-logo.png")}`,
        },
        {
          label: "Google Cloud Platform",
          src: `${require("../assets/images/skills/gcp-logo.png")}`,
        },
        {
          label: "Git",
          src: `${require("../assets/images/skills/git-logo.png")}`,
        },
        {
          label: "Docker",
          src: `${require("../assets/images/skills/docker-logo.png")}`,
        },
      ],
    };
  },
  methods: {
    downloadResume() {
      window.open(
        "https://drive.google.com/file/d/1Mgqe1JkblYz-A51FpsRBje2OysL4hr9l/view?usp=sharing"
      );
    },
  },
};
</script>
<style scoped>
@import "../assets/styles/about-me.css";
</style>
