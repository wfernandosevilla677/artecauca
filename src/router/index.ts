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
  },
  {
    path:"/acerca",
    name:"Acerca",
    component:()=>
    import("../views/Acerca.vue"),
  },
  {
    path:"/registroven",
    name:"RegistroVen",
    component:()=>
    import("../views/RegistroVen.vue"),
  },{
    path:"/correctoven",
    name:"CorrectoVen",
    component:()=>
    import("../views/CorrectoVen.vue"),
  },
  {
    path:"/manillasven",
    name:"ManillasVen",
    component:()=>
    import("../views/ManillasVen.vue"),
  },
  {
    path:"/collaresven",
    name:"CollaresVen",
    component:()=>
    import("../views/CollaresVen.vue"),
  },
  {
    path:"/aretesven",
    name:"AretesVen",
    component:()=>
    import("../views/AretesVen.vue"),
  },
  {
    path:"/manillascom",
    name:"ManillasCom",
    component:()=>
    import("../views/ManillasCom.vue"),
  },
  {
    path:"/collarescom",
    name:"CollaresCom",
    component:()=>
    import("../views/CollaresCom.vue"),
  },
  {
    path:"/bolsoscom",
    name:"BolsosCom",
    component:()=>
    import("../views/BolsosCom.vue"),
  },
  {
    path:"/correctocom",
    name:"CorrectoCom",
    component:()=>
    import("../views/CorrectoCom.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
