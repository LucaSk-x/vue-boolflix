<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  import TheMain from './components/TheMain.vue'

  import axios from 'axios';

export default {
  
  name: 'App',
  components: {
    TheHeader,
    TheMain,
  },
  mounte() {
    axios.get('https://api.themoviedb.org/3/movie/550',  {
      params: {
        api_key: 'd3079b4f660d990f446164797fe4dafd',
        query: 'name film',
        leanguage: 'it-It',
    }
  }
)}
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}
</style>
