<template>
  <div class="congresos">

    <div class="container">
      <v-card color="teal">
        <v-card-title class="titulo">
          <h1>
          Congreso 1
          </h1>
        </v-card-title>

        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="black"
          grow
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-card
              color="white"
              flat
            >
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
  </div>
  </div>
    
</template>
<script>
export default {
  name: 'Congreso',
  components: {
    
  },
    data () {
      return {
        tab: null,
        items: [
          'Descripción', 'Programa', 'Comités', 'Inscribirse/Contacto',
        ],
        text: 'descripción del congreso',
      }
    }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo{
  text-align: center;
  justify-content: center;
  font-size: 15px;
}
</style>
