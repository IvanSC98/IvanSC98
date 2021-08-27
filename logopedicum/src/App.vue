<template>
  <v-app>
    <v-main>  
      <VueScrollProgress></VueScrollProgress>
      <Header class="header"/>
      <router-view/>
      <Footer class="footer"/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './header/footer/Header.vue';
import Footer from './header/footer/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

.header{
  padding-bottom: 10px;
}

.footer{
  padding-top: 10px;
}
/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: #f4f4f4 !important;
}

#progress-el {
  /* progress bar */
  background-color: red !important;
}
  
</style>

