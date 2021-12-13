<template>
  <div class="materiales">
    <p class="title1">Materiales</p>
    <div class="contenedor">
      <div class="filtros">
        <v-card class="filtros"
        >
          <v-toolbar
            flat
            color="teal"
            dark
          >
            <v-toolbar-title>Filtros</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <h2 class="text-h6 mb-2">
              Categorias
            </h2>

            <v-chip-group
              v-model="categorias"
              column
              multiple
            >
              <v-chip
                filter
                outlined
              >
                Disfagia
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Terapia miofuncional
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Libros
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Respiración
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Voz
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Deglución
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-text>
            <h2 class="text-h6 mb-2">
              Productos
            </h2>

            <v-chip-group
              v-model="productos"
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
      <div class="materiales1">
        <div class="fila">
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        </div>
        <div class="fila1">
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        <div class="card">
          <img src="https://logopedicum.com/wp-content/uploads/2014/11/pesas-labiales.png" alt="Pesas labiales" style="width:100%">
          <h1>Pesas labiales</h1>
          <p class="price">19.99€</p>
          <p>Set de 3 pesas labiales</p>
          <button>Añadir al carrito</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      productos:[],
      categorias:[],
      amenities: [1, 4],
      neighborhoods: [1],
    }),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title1{
  font-family: helvetica !important;
  font-size: 50px !important;
  color: black;
  position: relative;
  text-align: center;
  vertical-align: middle;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  text-align: center;
  font-family: helvetica;
  display: inline-block;
  margin: 2%;
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
  background-color: teal;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
.contenedor{
  display: flex;
  margin-right: 5%;
  margin-left: 1%;
  margin-top: 3%;
  text-align: center;
}

.filtros{
  display: inline-block;
  width: 65%;
}

.materiales1{
  display: inline-block;
  width: 150%;
}

.fila{
  position: relative;
  text-align: center;
}

.fila1{
  position: relative;
  text-align: center;
}
</style>
