<template>
  <div class="signup">
    <p class="title1">Únete</p>

    <div class="contenido">
      <v-card
        class="card"
        max-width="344"
        
      >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="300px"
      >
      </v-img>

      <v-card-title>
       Cuenta profesional
      </v-card-title>

      <v-card-subtitle>
       Profesionales cualificados
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
          @click="goRegisterPro"
        >
          Registrarse
        </v-btn>

      </v-card-actions>
      </v-card>

      <v-card
        class="card1"
        max-width="344"
      >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="300px"
      >
      </v-img>

      <v-card-title>
        Cuenta usuario
      </v-card-title>

      <v-card-subtitle>
        Usuarios normales
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
          @click="goRegister"
        >
          Registrarse
        </v-btn>

      </v-card-actions>

            
    </v-card>
    </div>
    
  </div>
    
</template>
<script>
export default {
  name: 'Signup',
  components: {
    
  },
  data: () => ({
      
    }),
    methods: {
        goRegister() {
          if (this.$route.name !== 'Signup') {
            this.$router.push({ name: 'Signup' })
          }
        },
        goRegisterPro() {
          if (this.$route.name !== 'SignupPro') {
            this.$router.push({ name: 'SignupPro' })
          }
        },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.title1{
  font-family: helvetica !important;
  font-size: 70px !important;
  color: black;
  position: relative;
  text-align: center;
}

.contenido{
    display: flex;
    position: relative;
    margin: 5%;
    margin-left: 30%;
    margin-right: 30%;
}

.card{
    display: inline-block;
    margin-right: 5%;
}

.card1{
    display: inline-block;

}

</style>