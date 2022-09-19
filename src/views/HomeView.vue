<template>
  <nav>
    <!-- <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <h1>HOME PAGE</h1>
    <button @click="$router.push('/')">Log out</button>
  </nav>
  

</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
