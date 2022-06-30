<template>
    <div>
        <div class="main">
            <div class="container">
                <div id="movie-container"><!-- movie container -->
                    <h2 class="text-white text-uppercase text-center">movie</h2>
                    <ul class="list-unstyled row">
                        <li class="col-3 py-3" v-for="movie in movieList" :key="movie.id">
                            <div class="card-movie d-flex flex-column justify-content-between">
                                <img class="w-100 p-2" :src="`${preLink}${movie.poster_path}`" alt="">
                                <h5 class="text-uppercase text-white text-center">{{movie.title}}</h5>
                                <h6></h6>
                                <h6 class="text-center text-white">Voto: <span class="text-warning">{{movie.vote_average}}</span></h6>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="series-container"><!-- serie conteiner -->
                <h2 class="text-white text-uppercase text-center">series tv</h2>
                    <ul class="list-unstyled row">
                        <li class="col-3 py-3" v-for="serie in seriesList" :key="serie.id">
                            <div class="card-movie d-flex flex-column justify-content-between">
                                <img class="w-100 p-2" :src="`${preLink}${serie.poster_path}`" alt="">
                                <h5 class="text-uppercase text-white text-center">{{serie.name}}</h5>
                                <h6><span class="fi fi-gb"> </span></h6>
                                <h6 class="text-center text-white">Voto: <span class="text-warning">{{serie.vote_average}}</span></h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movieList: Array,
        seriesList: Array,
        searchText: String,
    },
    data() {
        return {
            preLink: "http://image.tmdb.org/t/p/w342/",
        }
    },
    computed: {
        countryFlag() {
            return this.movieList.original_language
        }
    }
}
</script>

<style lang="scss">
    .main {
        background-color: #141414;
        .card-movie {
            padding: 1rem;
        }
    }
</style>