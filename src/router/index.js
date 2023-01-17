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
      name: "user",
      children: [
        {
          path: "",
          component: UserIndex,
          name: "UserIndex",
          meta: { lable: "首頁", icon: "home" },
        },
        {
          path: "example",
          component: () => import("@/views/user/example/index.vue"),
          name: "Example",
          meta: { lable: "範例", icon: "info" },
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
    user.removeToken();
    return { name: "Login" };
  } else if (to.name == "Login" && auth) {
    return { name: "UserIndex" };
  }
  // return false;
});

export default router;
