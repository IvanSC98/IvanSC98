<template>
  <div class="signin">

    <v-card class="contenido">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
            <v-text-field
              prepend-icon="mdi-account"
              name="login"
              label="Usuario"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              name="password"
              label="Contraseña"
              type="password"
            ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Iniciar Sesion</v-btn>
      </v-card-actions>
    </v-card>
  </div>
    
</template>
<script>
export default {
  name: 'Signin',
  components: {
    
  },
  data: () => ({
      
    }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contenido{
  margin: 10%;
  margin-left: 20%;
  margin-right: 20%;
}


</style>