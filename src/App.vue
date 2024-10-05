<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/sobre-nos">Sobre Nós</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/login">Login</router-link>
        
      </nav>
    </header>
    <main>
      <router-view></router-view> 
    </main>
    <footer>
      <p><b>Etec Juscelino Kubitschek de Oliveira <br> 2024</b></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
header {
  background-color: #7c0391;
  padding: 10px;
  border-bottom: 1px solid #ffffff;
  
}

nav {
  display: flex;
  justify-content: space-around;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #ffffff;
}

nav a:hover {
  text-decoration: underline; 
}


main {
  padding: 20px; 
  min-height: calc(100vh - 100px); 
}

footer {
  text-align: center;
  padding: 50px;
  background-color: #d59bff;
  border-top: 1px solid #7901f9;
}
</style>
