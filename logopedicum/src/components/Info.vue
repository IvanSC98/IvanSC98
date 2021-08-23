<template>
  <div class="info1">
    <v-card class="card1">
    <p class="title1">¿Quiénes somos?</p>
    <div class="description">
      <p>GIHS Logopedic es una plataforma digital destinada a la creación de una comunidad tanto de profesionales como familias en la cual 
      compartir conocimientos e inquietudes acerca de las distitnas patologias que se presentan a lo largo de toda una vida, desde 
      el desarrollo en los más pequeños, hasta los problemas que se presentan a raíz de posibles accidentes o simplemente 
      con el transcurso de los años.</p>
      <p>Con esta plataforma digital podrás seguir creciendo como profesional gracias a los cursos, congresos y másters que tanto nosotros,
      como tú puedes publicar para poder poner en común las distintas experiencias y conocimientos de los profesionales que quieran,
      y de esta forma aprender todos de una forma conjunta. </p>
      <p>También puedes estar al día con nuestro apartado de noticias, en el cual podrás revisar lo que esta suceciendo de una forma sencilla
      y clara.</p>
      <p>Además queremos que todo el mundo pueda trabajar de manera óptima con los materiales necesarios para ello, por eso contamos
      con una tienda en la cual encontrarás un gran repertorio de materiales e instrumental a un buen precio.</p>
    </div>
    </v-card>
    <div class="info2">
    <p class="title2">Sobre nosotros</p>
      <div class="description2">
        <div class="card">
          <img class="imagen" src="../assets/ivan.png" style="width:100%">
          <h1>Iván Sierra</h1>
          <p class="title">Logopeda</p>
          <p>Universidad de Valladolid</p>
          <p><button>Contacto</button></p>
        </div>
        <div class="card">
          <img class="imagen" src="https://media-exp1.licdn.com/dms/image/C4D03AQG0B3bt25C5Ug/profile-displayphoto-shrink_200_200/0/1616316252772?e=1632355200&v=beta&t=TPXbbyFnbst1zNIaSLam9MAU49tEv2nTF3mIjLgP3NA" style="width:100%">
          <h1>Gonzalo Herreros</h1>
          <p class="title">Ingeniero Informático</p>
          <p>Universidad de Valladolid</p>
          <p><button>Contacto</button></p>
        </div>
      </div>
    </div>
  </div>
    
</template>
<script>
export default {
  name: 'Info',
  components: {
    
  },
  data: () => ({
      
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
  left: 34%;
}
.title2{
  font-family: fantasy !important;
  font-size: 70px !important;
  color: black;
  position: relative;
  left: 37%;
}
.description{
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
}
.description2{
  position: relative;
  left: 30%;
  right: 30%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 20%;
  margin: auto;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  display: inline-block;
  padding: 10px;

}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

.imagen{
  height: 350px;
}

.card1{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
}
</style>