import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registrarse",
    name:"Registrarse",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Registrarse.vue"),
  },
  {
    path: "/comprador",
    name: "Comprador",
    component: () =>
    import( "../views/Comprador.vue"),
  }
  ,
  {
    path:"/vendedor",
    name:"Vendedor",
    component:()=>
    import("../views/Vendedor.vue"),
  },{
    path:"/producto",
    name: "Producto",
    component:()=>
    import("../views/Producto.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
