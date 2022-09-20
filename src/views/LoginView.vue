<template>
  <form>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail3"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input
          v-model="pass"
          type="password"
          class="form-control"
          id="inputPassword3"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-12 text-center col-form-label"
        >No account?
        <span @click="$router.push('/signUp')" class="signUp">Create one</span>
      </label>
    </div>
    <div class="text-center mt-5">
      <span type="submit" class="btn btn-primary" @click="login()">
        Login
      </span>
    </div>
  </form>
</template>




<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      pass: null,
      response: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPuL9-AiJhUIYbj4o8ADIbuhWutiahpeM",
          { email: this.email, password: this.pass, returnSecureToken: true }
        )
        .then((response) => {
          this.$store.state.token = response.data.idToken;
          this.$router.push("/home");
          localStorage.setItem("token", response.data.idToken)
        })
        .catch(() => {
          console.log("login error");
          this.$store.state.error__modal = true;
          setTimeout(() => {
            this.$store.state.error__modal = false;
          }, 2000);
        });
    },
  },
};
</script>


<style lang="scss" scoped>

label{
  color: white;
}
.btn-primary{
  background: #42b983;
  border: none;
  transition: 0.5s ease;
  &:hover{
    background: #42b983;
  }
}
.signUp {
  color: #42b983;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>