<template>
  <v-app-bar hide-on-scroll app class="header">
    <div class="d-flex align-center">
      <v-icon size="40" color="#ed1968" class="pa-1">mdi-heart</v-icon>
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

.v-app-bar.v-app-bar.v-app-bar--hide-shadow {
  top: unset !important;
}

.link {
  width: 100px;
  font-weight: 400;
  font-size: 16px;
  color: #616161;
  text-decoration: unset;
}

.link:hover {
  color: #ed1968;
  font-weight: 500;
}

.active-link {
  width: 100px;
  color: #ed1968;
  font-weight: 500;
  text-decoration: unset;
}

/* XS - Mobile */
@media (max-width: 600px) and (min-width: 385px) {
  .link {
    width: 85px;
  }
  .active-link {
    width: 85px;
  }
}

/* XS Smallerrr */
@media (max-width: 385px) {
  .link {
    width: 85px;
  }
  .active-link {
    width: 85px;
  }
}
</style>
