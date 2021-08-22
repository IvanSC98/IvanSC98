<template>
  <v-app>
    <v-main>  
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
  
</style>

