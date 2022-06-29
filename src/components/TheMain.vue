<template>
    <div>
        <div class="main">
            <div class="container">
                
            </div>
        </div>
    </div>
</template>

<script>
import {state} from '../store'

export default {
    computed: {
        movieList() {
            return state.movieList;
        }
    }
}
</script>

<style lang="scss">
    .main {
        background-color: #141414;
        height: 91vh;
    }
</style>