<template>
  <div class="main">
    <p class="title1">Noticias</p>
    <v-card
      class="mx-auto"
      max-width="90vw"
    >

      <v-toolbar
        color="teal"
        dark
      >

        <v-toolbar-title>Últimas noticias</v-toolbar-title>

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
</template>
<script>
export default {
  name: 'Noticias',
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
        goNoticia() {
          if (this.$route.name !== 'Noticia') {
            this.$router.push({ name: 'Noticia' })
          }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.title1{
  font-family: helvetica !important;
  font-size: 50px !important;
  color: black;
  position: relative;
  text-align: center;
  vertical-align: middle;
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
