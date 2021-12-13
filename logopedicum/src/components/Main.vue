<template>
  <div class="main">
    <p class="title1">"Existe un lenguaje más allá de las palabras"</p>

    <div class="linea1">
      <v-card
      class="card">

        <v-img
          src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
          height="150px"
        />         

        <v-card-title>
          <h2>Congresos</h2>
        </v-card-title>

        <v-card-text>
            Ver todos los congresos disponibles
        </v-card-text>
      
        
        <v-card-actions>
          <v-btn class="but1" color=success @click="goCongresos">IR YA</v-btn>
        </v-card-actions>
        
      </v-card>

      <v-card
      class="card">

        <v-img
          src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
          height="150px"
        />      

        <v-card-title>
          <h2>Cursos</h2>
        </v-card-title>

        <v-card-text>
            Ver todos los cursos disponibles
        </v-card-text>
      
        
        <v-card-actions>
          <v-btn color=success @click="goCursos">IR YA</v-btn>
        </v-card-actions>
        
      </v-card>

    </div>

    <div class="linea2">
      <v-card
      class="card">

        <v-img
          src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
          height="150px"
        />                 

        <v-card-title>
          <h2>Materiales</h2>
        </v-card-title>

        <v-card-text>
            Ver todos los materiales disponibles
        </v-card-text>
      
        
        <v-card-actions>
          <v-btn color=success @click="goMateriales">IR YA</v-btn>
        </v-card-actions>
        
      </v-card>

      <v-card
      class="card">

        <v-img
          src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
          height="150px"
        />         

        <v-card-title>
          <h2>Noticias</h2>
        </v-card-title>

        <v-card-text>
            Ver todos las noticias disponibles
        </v-card-text>
      
        
        <v-card-actions>
          <v-btn color=success @click="goNoticias">IR YA</v-btn>
        </v-card-actions>
        
      </v-card>
    
    </div>


    <div class="linea3">
      <v-card
      class="card">

        <v-img
          src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
          height="150px"
        />       

        <v-card-title>
          <h2>Continua tus estudios</h2>
        </v-card-title>

        <v-card-text>
            Ver todos los estudios disponibles
        </v-card-text>
      
        
        <v-card-actions>
          <v-btn color=success @click="goEstudios">IR YA</v-btn>
        </v-card-actions>
        
      </v-card>
    
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  components: {
    
  },
  data() {
    return {
  
      }
    },
    methods: {
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
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.linea1{
  position: relative;
  text-align: center;
}

.linea2{
  position: relative;
  text-align: center;
}

.linea3{
  position: relative;
  text-align: center;
}

.card{
  display: inline-block;
  margin: 1em;
  width: 40%;
}

.title1{
  font-family: Helvetica !important;
  font-size: 30px !important;
  color: black;
  position: relative;
  text-align: center;
  vertical-align: middle;
  margin-top: 1px;
  margin-bottom: 1px;
}

</style>
