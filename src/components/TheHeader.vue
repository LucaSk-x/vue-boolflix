<template>
    <div>
        <div class="nav-bar px-5">
            <div class="d-flex justify-content-between align-items-center">
                <div class="logo">
                    <img class="w-100" src="../../public/img/netflix-logo.png" alt="">
                </div>
                <div class="search">
                    <div class="input-group m-3">
                        <input type="text" class="form-control" placeholder="Titoli, persone, generi" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchText">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*     import {state} from "../store"
 */
export default {
    data: {
        return {
            searchText: "",
        },
    },
    methods: {
        
    }

}
</script>

<style lang="scss">
    .nav-bar {
        background-color: #000000;
        height: 9vh;
        .logo {
            width: 50px
        }
    }
</style>