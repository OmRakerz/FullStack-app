import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const routes = [
  {
    name: "Index",
    path: "/",
    component: Index,
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    name: "Create",
    path: "/create",
    component: Create,
  },
  {
    path: "/about",
    name: "About",
    // разделение кода на уровне маршрута
 // это генерирует отдельный фрагмент (около.[hash].js) для этого маршрута
 // который загружается с задержкой при посещении маршрута.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;