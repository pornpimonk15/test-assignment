<template>
  <v-flex class="py-5">
    <p class="aboute-me-title">Experience</p>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="6" xl="6">
        <v-card class="card" style="height: 100%">
          <v-timeline align-top dense style="height: inherit">
            <v-timeline-item icon="mdi-school-outline" color="#F5495D" fill-dot>
              <v-row class="pt-1 text-start">
                <v-col cols="12">
                  <strong>Bachelor's Degrees</strong>
                  <br />
                  <small>2015 - 2019 | Naresuan University</small>
                </v-col>
                <v-col class="text-caption">
                  <span class="bullet">Major Information Technology</span>
                  <span class="bullet">
                    Undergraduate Thesis topic is Evaluation system of seminar
                    and undergraduate thesis for CSIT Science, NU develop using
                    by HTML5, CSS3, PHP, MYSQL, JavaScript and Bootstrap.
                  </span>
                  <span class="mt-3 bullet">
                    Mini project for Co-operative Education is Timesheet system
                    develop using by Vue.js, Vuetify and Cloud Firestore.</span
                  >
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item icon="mdi-school-outline" color="#F5495D" fill-dot>
              <v-row class="pt-1 text-start">
                <v-col cols="12">
                  <strong>Senior High School</strong>
                  <br />
                  <small>2012 - 2014 | Khonsarnwithayakom School</small>
                </v-col>
                <v-col class="text-caption">
                  <span class="bullet">Science and Mathematics Program</span>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
      <v-col xs="12" sm="8" md="6" lg="6" xl="6">
        <v-card class="card">
          <v-timeline align-top dense>
            <v-timeline-item
              v-for="(experience, index) in experiences"
              :key="index"
              color="#6868DD"
              icon="mdi-briefcase-outline"
              fill-dot
            >
              <v-row class="pt-1 text-start">
                <v-col cols="12">
                  <strong>{{ experience.title }} </strong>
                  <br />
                  <small
                    >{{ experience.year }} | {{ experience.location }}</small
                  >
                </v-col>
                <v-col class="text-caption">
                  <span
                    v-for="(item, itemIdex) in experience.items"
                    :key="itemIdex"
                    class="bullet"
                  >
                    {{ item }}
                  </span>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row></v-flex
  >
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Frontend Developer",
          year: "Sep 2019 - Present",
          location: "iCreativeSystems Co., Ltd.",
          items: [
            "Transform requirement into refined design.",
            "Coordinating projects, planning, and execution between teams.",
            "Coordinate between developers and other designers.",
            "Coaching for trainees and new employees",
            "Develop web payment with Banking gateway",
            "Build Docker and deploy on Google Cloud",
            "Implement web apps using Vue.js, React.js",
            "Transform requirement into refined design.",
            "Write document and advises customers regarding software technical",
          ],
        },
        {
          title: "Co-operative Education (Web developer)",
          year: "Dec 2018 - Mar 2019",
          location: "Apptitude Co., Ltd.",
          items: [
            "Support team develop web app using Laravel including and test for find bug",
            "Develop web app using Vue.js, Vuetify, Google Cloud Firestore",
          ],
        },
      ],
      experienceDev: [
        "Transform requirement into refined design.",
        "Coordinating projects, planning, and execution between teams.",
        "Coordinate between developers and other designers.",
        "Coaching for trainees and new employees",
        "Develop web payment with Banking gateway",
        "Build Docker and deploy on Google Cloud",
        "Implement web apps using Vue.js, React.js",
        "Transform requirement into refined design.",
        "Write document and advises customers regarding software technical",
      ],
      experienceIntern: [
        "Support team develop web app using Laravel including and test for find bug",
        "Develop web app using Vue.js, Vuetify, Google Cloud Firestore",
      ],
    };
  },
};
</script>
