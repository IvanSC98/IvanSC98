import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Noticias from "../components/Noticias.vue";
import Congresos from "../components/Congresos.vue";
import Cursos from "../components/Cursos.vue";
import Materiales from "../components/Materiales.vue";
import Estudios from "../components/Estudios.vue";
import Info from "../components/Info.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/congresos',
    name: 'Congresos',
    component: Congresos
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/materiales',
    name: 'Materiales',
    component: Materiales
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: Estudios
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
    next();
});
  
export default router;