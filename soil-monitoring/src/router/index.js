import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store"
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home"),
    meta: {
      showTab: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/My"),
    meta: {
      showTab: true,
    },
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin || store.state.token) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
    meta: {
      showTab: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register"),
    meta: {
      showTab: false,
    },
  },
  {
    //重定向，在项目跑起来，访问/立马定向到fun1
    path: "/",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
