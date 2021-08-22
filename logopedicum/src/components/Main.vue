<template>
  <div class="main">
    
    <nav>
        <ul>
            <li>¿Quiénes somos?</li>
            <li>Únete</li>
            <li>Iniciar sesión</li>
        </ul>
    </nav>

    <aside>
      <blockquote>Primera noticia</blockquote>
      <blockquote>Segunda noticia</blockquote>
      <blockquote>Tercera noticia</blockquote>
    </aside>
  </div>
</template>
<script>
export default {
  name: 'Main',
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

</style>
