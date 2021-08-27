<template>
  <div class="noticia">

    <v-card class="contenido">
    
    <div class="header">
      <h2>Detienen en Valladolid a un hombre de 44 años por agredir a su expareja</h2>
    </div>

    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg" style="height:200px;"></div>
          <p>Efectivos de la Policía Municipal de Valladolid han detenido a un hombre de 44 años por la supuesta agresión a su expareja, han informado a Europa Press fuentes policiales.

Los hechos se han producido en el barrio de Rondilla en torno a las 0.15 horas de este viernes, cuando una mujer avisó a la policía de que había sufrido una agresión por parte de su expareja. Hasta el lugar se desplazaron agentes de la Policía Municipal, a los que la víctima manifestó que hasta el domicilio había acudido la persona con la que había mantenido una relación, con la que ya no convivía, quien había ido a recoger unos enseres y, una vez en la vivienda, se produjo una discusión y posteriormente la agresión.

La mujer, de 43 años, explicó que el individuo le había agarrado por las muñecas y el cuello, por lo que los agentes procedieron a la detención del hombre.</p>
        </div>
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h2>Informa</h2>
          <p>Javier Pinillos</p>
        </div>
        <div class="card">
          <v-card
            class="mx-auto"
            max-width="90vw"
          >

            <v-toolbar
              color="teal"
              dark
            >

              <v-toolbar-title>Más noticias</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>

            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <div class="noticia">

                      <v-img
                        class="imagen"
                        :src="card.src"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="100px"
                      >
                        <a @click="goNoticia"><v-card-title class="titulo" v-text="card.title"></v-card-title></a>
                      </v-img>

                      <v-card>
                        <p class="descripcion">Hola</p>
                      </v-card>


                    </div>

                    <v-card-actions>
                      <a @click="goNoticia">Saber más...</a>

                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
      </div>
    </div>

    </v-card>

    
    
    
  </div>
    
</template>
<script>
export default {
  name: 'Noticia',
  components: {
    
  },
  data: () => ({
       cards: [
        { title: 'Noticia 1', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Noticia 2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
        { title: 'Noticia 3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      ],
    }),
     methods: {
     
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1{
  font-family: fantasy !important;
  font-size: 70px !important;
  color: black;
  position: relative;
  text-align: center;
  vertical-align: middle;
}

.contenido{
  margin: 2%;
}

body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.row{
  margin: 1%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

.titulo{
  color: #f1f1f1;
}

</style>