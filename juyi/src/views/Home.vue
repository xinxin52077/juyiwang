<template>
  <div class="home">
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./nav";
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="sass" scoped>
.home
  width: 100%
  height: calc( 100% - 40px )
  margin-top: 40px
  background: url('../assets/image/bg.jpg')
</style>