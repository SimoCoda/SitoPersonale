import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import CvPage from "../pages/CvPage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ContattamiPage from "../pages/ContattamiPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/cv",
      name: "CvPage",
      component: CvPage,
    },
    {
      path: "/portfolio",
      name: "PortfolioPage",
      component: PortfolioPage,
    },
    {
      path: "/contattami",
      name: "ContattamiPage",
      component: ContattamiPage,
    },
  ],
});

export default router;
