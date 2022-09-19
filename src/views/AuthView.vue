<template>
  <div class="auth__body">
    <img class="auth__body__img" src="../assets/img/bg.jpg" alt="" />
    <div class="auth__card">
      <h1 class="auth__card__title">Welcome</h1>
      <router-view />
    </div>
    <div class="modal succes__modal" v-if="$store.state.modal">
      <h5>Success</h5>
    </div>
    <div class="modal error__modal" v-if="$store.state.error__modal">
      <h5>Wrong Input</h5>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.auth__body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .auth__body__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal {
    width: 250px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 16px;
    position: absolute;
    top: 20px;
    right: 20px;
    transition: 0.3s ease;
  }
  .succes__modal {
    background: #42b983;
  }
  .error__modal {
    background: red;
  }
}
.auth__card {
  width: 500px;
  min-height: 300px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.5px);
  padding: 20px;
  z-index: 1;
  .auth__card__title {
    text-align: center;
    margin-bottom: 30px;
    color: #42b983;
  }
}
</style>