import Vue from "vue";
import VueRouter from "vue-router";
import GalleryView from "../views/GalleryView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/gallery",
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
