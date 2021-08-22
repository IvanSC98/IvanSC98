<template>
  <v-app>
    <v-main>
      <Header/>
      <Buscador/>
      <Main/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';
import Header from './header/footer/Header.vue';
import Footer from './header/footer/Footer.vue';
import Buscador from './header/footer/Buscador.vue';

export default {
  name: 'App',

  components: {
    Main,
    Header,
    Footer,
    Buscador,
  },

  data: () => ({
    //
  }),
};
</script>
