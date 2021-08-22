<template>
  <div class="header">
      <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-title class="title">Logopedicum</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn color="primary">
          ¿Quiénes somos?
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
        

        <v-btn color="primary">
          Únete
          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn color="primary">
          Iniciar sesión
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Congresos</v-tab>
            <v-tab>Cursos</v-tab>
            <v-tab>Materiales</v-tab>
            <v-tab>Continúa tus estudios</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>