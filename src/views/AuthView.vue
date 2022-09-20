<template>
  <div class="auth__body">
    <div class="auth__card">
      <div class="auth__card__nav">
        <h1 >Welcome</h1>
        <img src="../assets/logo.png" alt="" />
      </div>

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
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  .modal {
    width: 250px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 8px;
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
  padding: 20px;
  z-index: 1;
  box-shadow: 5px 20px 50px #000;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s ease-in-out;
  &:hover {
    border: 2px solid #42b983;
  }
  .auth__card__nav {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    color: #42b983;
    img{
      width: 50px;
      height: 50px;
      margin-left: 20px;
    }
  }
}
</style>