import Vue from "vue";
import axios from "axios";

let searchText = "";

const state = Vue.observable({
    movieList: [],
    seriesList: [],
});

export function searchMovies () {
    axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
            api_key: 'd3079b4f660d990f446164797fe4dafd',
            query: searchText,
            leanguage: 'it-IT',
        },
    })
    .then((resp) => {
        state.movieList = resp.data.resilt;
    });
}