import { createRouter, createWebHistory } from "vue-router";
import CartPage from "../routePages/Cart/CartPage.vue";
import MainPage from "../App.vue";
import ErrorPage from "../routePages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },

  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
