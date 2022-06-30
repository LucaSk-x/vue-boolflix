<template>
    <div>
        <div class="main">
            <div class="container">
                <div id="movie-container"><!-- movie container -->
                    <h2 class="text-white text-uppercase text-center p-4x">movie</h2>
                    <ul class="list-unstyled row">
                        <li class="col-3 py-3" v-for="movie in movieList" :key="movie.id">
                            <div class="card-movie d-flex flex-column justify-content-between">
                                <img class="w-100 p-2" :src="`${preLink}${movie.poster_path}`" alt="">
                                <h5 class="text-uppercase text-white text-center">{{movie.title}}</h5>
                                <h6 class="text-white text-center">country: <span class="fi" :class=" 'fi-' +  countryFlag(movie.original_language)"></span></h6>
                                <h6 class="text-center text-white">
                                    <span v-for="i in 5" :key="i">
                                    <template v-if="i <= fiveStar(movie.vote_average)">
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </template>
                                    <template v-else>
                                        <i class="fa-regular fa-star"></i>
                                    </template>
                                    </span>
                                </h6>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="series-container"><!-- serie conteiner -->
                <h2 class="text-white text-uppercase text-center p-4">series tv</h2>
                    <ul class="list-unstyled row">
                        <li class="col-3 py-3" v-for="serie in seriesList" :key="serie.id">
                            <div class="card-movie d-flex flex-column justify-content-between">
                                <img class="w-100 p-2" :src="`${preLink}${serie.poster_path}`" alt="">
                                <h5 class="text-uppercase text-white text-center">{{serie.name}}</h5>
                                <h6 class="text-white text-center">country: <span class="fi" :class=" 'fi-' +  countryFlag(serie.original_language)"></span>
                                    <span v-for="i in 5" :key="i">
                                    <template v-if="i <= fiveStar(serie.vote_average)">
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </template>
                                    <template v-else>
                                        <i class="fa-regular fa-star"></i>
                                    </template>
                                    </span>
                                </h6>
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

    methods: {
        fiveStar(vote) {
            console.log(vote)
            return Math.round(vote / 2)
            
        },
            countryFlag(flag) {

                const langsMap = {
                en: "us",
                ja: "jp",
                zh: "cn",
                ko: "kp",
            };
            if (langsMap[flag]) {
            return langsMap[flag]
            }
            return flag
        },
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