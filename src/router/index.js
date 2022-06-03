import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Magazines from "../views/Magazines.vue";
import Podcasts from "../views/Podcasts.vue";
import Videos from "../views/Videos.vue";
import Creative from "../views/Creative.vue";
import Books from "../views/Books.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/magazines",
    name: "Magazines",
    component: Magazines,
  },
  {
    path: "/podcasts",
    name: "Podcasts",
    component: Podcasts,
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
  },
  {
    path: "/creative-direction",
    name: "Creative",
    component: Creative,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
