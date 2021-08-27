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
import SignupOp from "../components/SignupOp.vue";
import SignupPro from "../components/SignupPro.vue";
import Noticia from "../components/Noticia.vue";
import Congreso from "../components/Congreso.vue";
import Curso from "../components/Curso.vue";

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
    path: '/signupop',
    name: 'SignupOp',
    component: SignupOp
  },
  {
    path: '/signuppro',
    name: 'SignupPro',
    component: SignupPro
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/noticia',
    name: 'Noticia',
    component: Noticia
  },
  {
    path: '/congreso',
    name: 'Congreso',
    component: Congreso
  },
  {
    path: '/curso',
    name: 'Curso',
    component: Curso
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