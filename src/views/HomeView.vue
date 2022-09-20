<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <img src="../assets/logo.png" alt="">
          <h1>HOME PAGE</h1>
        </div>
        
        <span class="btn btn-danger" @click="logOut()">Log out</span>
      </nav>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  methods: {
    logOut() {
      this.$store.state.token = "";
      localStorage.removeItem("token");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}

.logo{
  display: flex;

}
.logo img{
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
