import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/add_products",
    name: "create_products",
    component: () => import("../views/create_product.vue"),
  },
  {
    path: "/buy_product/:id",
    name: "buy_product",
    component: () => import("../views/buy_product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
