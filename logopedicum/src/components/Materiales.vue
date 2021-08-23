<template>
  <div class="materiales">
    <p class="title1">Materiales</p>
    <div class="card">
      <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
      <h1>Pesas labiales</h1>
      <p class="price">19.99€</p>
      <p>Set de 3 pesas labiales</p>
      <p><button>Añadir al carrito</button></p>
    </div>
      <v-card class="filtros"
        max-width="400"
      >
        <v-toolbar
          flat
          color="deep-purple accent-4"
          dark
        >
          <v-btn icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Filter results</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <h2 class="text-h6 mb-2">
            Choose amenities
          </h2>

          <v-chip-group
            v-model="amenities"
            column
            multiple
          >
            <v-chip
              filter
              outlined
            >
              Elevator
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Washer / Dryer
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Fireplace
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Wheelchair access
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Dogs ok
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Cats ok
            </v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-text>
          <h2 class="text-h6 mb-2">
            Choose neighborhoods
          </h2>

          <v-chip-group
            v-model="neighborhoods"
            column
            multiple
          >
            <v-chip
              filter
              outlined
            >
              Snowy Rock Place
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Honeylane Circle
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Donna Drive
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Elaine Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Court Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Kennedy Park
            </v-chip>
          </v-chip-group>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      amenities: [1, 4],
      neighborhoods: [1],
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
  left: 40%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
.filtros{

}
</style>
