<template>
  <div class="signUp__form">
    <h1 class="signUp__title">SignUp</h1>
    <form>
      <div class="form-group mb-3">
        <label for="exampleInputName">Fullname</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          placeholder="Fullname"
          v-model="fullName"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="pass"
        />
      </div>
      <p>{{ pass }}</p>
      <span class="btn btn-primary" @click="submit()">Submit form</span>
    </form>
    <div class="mt-4">
      <router-link class="btn btn-secondary" to="/login">Back to Login</router-link>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      fullName: null,
      email: null,
      pass: null,
    };
  },
  methods: {
    submit() {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPuL9-AiJhUIYbj4o8ADIbuhWutiahpeM",
          { email: this.email, password: this.pass, returnSecureToken: true }
        )
        .then((response) => {
          this.$store.state.modal = true;
          (this.fullName = null),
            (this.email = null),
            (this.pass = null),
            (this.passConfirm = null);
          setTimeout(() => {
            this.$store.state.modal = false;
          }, 2000);
        })
        .catch(() => {
          console.log("error");
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
.signUp__title,label {
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
</style>