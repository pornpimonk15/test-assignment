<template>
  <v-app-bar app class="header">
    <div class="d-flex align-center">
      <v-icon size="40" color="#ed1968" class="pa-1">mdi-heart</v-icon>
      <!-- <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="35"
      /> -->
    </div>

    <v-spacer></v-spacer>
    <template v-for="(menu, index) in menus">
      <router-link
        :key="index"
        :to="menu.path"
        :class="isActiveMenu(menu.path, $route.path) ? 'active-link' : 'link'"
        active-class="active-link"
        >{{ menu.label }}</router-link
      >
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menus: [
        {
          label: "Gallery",
          path: "/gallery",
        },
        {
          label: "About Me",
          path: "/about",
        },
      ],
    };
  },
  methods: {
    isActiveMenu(path, currentPath) {
      return path === currentPath;
    },
  },
};
</script>

<style scoped>
.header {
  background: #ffffff !important;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 50px !important;
  width: 70%;
  margin: auto;
  top: 30px !important;
}

.link {
  min-width: 100px;
  font-weight: 400;
  font-size: 16px;
  color: #616161;
  text-decoration: unset;
  padding-inline: 10px;
}

.link:hover {
  color: #ed1968;
  font-weight: 500;
}

.active-link {
  min-width: 100px;
  color: #ed1968;
  font-weight: 500;
  text-decoration: unset;
}
</style>
