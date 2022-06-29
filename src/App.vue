<template>
  <div id="app">
    <TheHeader @searchTextChanged="onSearchTextChanged"></TheHeader>
    <TheMain :movie="movie"></TheMain>
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
  data() {
    return {
      searchText: "",
      movieList: [],
    }
  },

  methods: {
    onSearchTextChanged(userInput) {
      this.searchText = userInput;

    axios
    .get('https://api.themoviedb.org/3/search/movie?',  {
      params: {
        api_key: 'd3079b4f660d990f446164797fe4dafd',
        query: userInput,
        leanguage: 'it-It',
    }
  })
    .then((resp) => {
      this.movieList = resp.data.results;
      });
    },
  },
  mounted() {

  },
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}
</style>
