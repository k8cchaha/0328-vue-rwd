import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RwdView from "../views/RwdView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/rwd",
    name: "rwd",
    component: RwdView,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
