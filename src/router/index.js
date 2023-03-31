import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/index"),
      },
      {
        path: "/resume",
        name: "Resume",
        component: () => import("@/views/resume"),
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: () => import("@/views/portfolio"),
      },
      {
        path: "/blog",
        name: "Blog",
        component: () => import("@/views/blog/index"),
      },
      {
        path: "/blog/:slug",
        name: "Show Blog",
        component: () => import("@/views/blog/show"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("@/views/contact"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
