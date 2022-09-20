<template>
  <router-view />
</template>


<script>
export default {
  created() {
    let tokenId = localStorage.getItem("token")
    if(tokenId){
      this.$store.state.token = tokenId
      this.$router.push("/home")
    }else{
      this.$router.push("/")
    }
  },
};
</script>
<style>
</style>
