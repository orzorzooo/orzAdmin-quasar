import { createRouter, createWebHistory } from "vue-router";
import { userStore } from "@/stores/user";
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
          component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
        },
      ],
    },

    {
      path: "/user",
      component: LayoutUser,
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

router.beforeEach(async (to, from) => {
  const user = userStore();
  const auth = await user.authenticated();
  if (to.name !== "Login" && !auth) {
    console.log("router guard fail");
    return { name: "Login" };
  } else if (to.name == "Login" && auth) {
    return { name: "UserIndex" };
  }
  // return false;
});

export default router;
