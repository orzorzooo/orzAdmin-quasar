import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import Default from "@/layouts/default.vue";
import LayoutUser from "@/layouts/user/index.vue";
import UserIndex from "@/views/user/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "defaultIndex",
      component: Default,
      children: [
        {
          path: "",
          name: "Login",
          component: () => import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/user",
      component: LayoutUser,
      name: "UserIndex",
      children: [
        {
          path: "",
          component: UserIndex,
          name: "UserIndex",
        },
      ],
    },
  ],
});

export default router;
