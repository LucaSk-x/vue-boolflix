<template>
  <div id="app">
    <TheHeader @searchTextChanged="onSearchTextChanged"></TheHeader>
    <TheMain :movieList="movieList" :seriesList="seriesList"></TheMain>
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
      seriesList: [],

    }
  },

  methods: {
    onSearchTextChanged(userInput, type) {

      this.searchText = userInput;

    axios
    .get('https://api.themoviedb.org/3/search/' + type,  {
      params: {
        api_key: 'd3079b4f660d990f446164797fe4dafd',
        query: userInput,
        leanguage: 'it-It',
    }
  })
    .then((resp) => {
      if(type === 'movie') {
        this.movieList = resp.data.results;
      } else if (type === 'tv') {
        this.seriesList = resp.data.results;
        }
      });
    },
  },
  mounted() {

  },
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  background-color: #141414;
}
</style>
