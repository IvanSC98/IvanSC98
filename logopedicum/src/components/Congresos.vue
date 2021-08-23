<template>
  <div class="congresos">
    
    <p class="title1">Congresos</p>
    <v-card
      class="mx-auto"
      max-width="90vw"
    >

      <v-toolbar
        color="teal"
        dark
      >

        <v-toolbar-title>Últimos congresos</v-toolbar-title>

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
                  <a><v-card-title class="titulo" v-text="card.title"></v-card-title></a>
                </v-img>

                <v-card>
                  <p class="descripcion">Hola</p>
                </v-card>


              </div>

              <v-card-actions>
                <a>Saber más...</a>

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
    
</template>
<script>
export default {
  name: 'Congresos',
  components: {
    
  },
  data: () => ({
      cards: [
        { title: 'Congreso 1', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Congreso 2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
        { title: 'Congreso 3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      ],
    }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1{
  font-family: fantasy !important;
  font-size: 70px !important;
  color: black;
  position: relative;
  left: 42%;
  right: 42%;
  width: 16%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.imagen{
  margin-top: 10px;
}

.titulo{
  color: aliceblue;
}

.descripcion{
  padding-left: 10px;
}

</style>
