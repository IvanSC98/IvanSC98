<template>
<div class="Buscador">
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"    
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Congresos</v-tab>
          <v-tab>Continua tus estudios</v-tab>
          <v-tab>Materiales</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
    >
      <v-container style="height: 500px;"></v-container>
    </v-sheet>
  </v-card>
</div>
</template>
<script>
export default {
  name: 'Buscador',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>