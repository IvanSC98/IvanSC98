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

        <p class="title1" style="color:white;">GIHS Logopedic</p>

        <v-spacer></v-spacer>

        <v-btn color="primary" @click="goInfo">
          ¿Quiénes somos?
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
        

        <v-btn color="primary" @click="goSignup">
          Únete
          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn color="primary" @click="goSignin">
          Iniciar sesión
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab @click="goPrincipal">Principal</v-tab>
            <v-tab @click="goCongresos">Congresos</v-tab>
            <v-tab @click="goCursos">Cursos</v-tab>
            <v-tab @click="goMateriales">Materiales</v-tab>
            <v-tab @click="goNoticias">Noticias</v-tab>
            <v-tab @click="goEstudios">Continua tus estudios</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  </div>
</template>
<script>

export default {
  name: 'Header',
  data() {
    return {
  
      }
    },
    methods: {
      goPrincipal(){
        if (this.$route.name !== 'Main') {
          this.$router.push({ name: 'Main' })
        }
      },
      goCongresos() {
        if (this.$route.name !== 'Congresos') {
          this.$router.push({ name: 'Congresos' })
        }
      },
      goCursos() {
        if (this.$route.name !== 'Cursos') {
          this.$router.push({ name: 'Cursos' })
        }
      },
      goMateriales() {
        if (this.$route.name !== 'Materiales') {
          this.$router.push({ name: 'Materiales' })
        }
      },
      goNoticias() {
        if (this.$route.name !== 'Noticias') {
          this.$router.push({ name: 'Noticias' })
        }
      },
      goEstudios() {
        if (this.$route.name !== 'Estudios') {
          this.$router.push({ name: 'Estudios' })
        }
      },
       goInfo() {
        if (this.$route.name !== 'Info') {
          this.$router.push({ name: 'Info' })
        }
      },
       goSignup() {
        if (this.$route.name !== 'Signup') {
          this.$router.push({ name: 'Signup' })
        }
      },
       goSignin() {
        if (this.$route.name !== 'Signin') {
          this.$router.push({ name: 'Signin' })
        }
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1{
  padding:10px !important;;
  margin-left: 25px !important;;
  font-family: fantasy !important;;
  font-size: 80px !important;;
}

.v-btn{
  margin: 5px;
}
</style>