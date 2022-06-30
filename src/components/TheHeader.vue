<template>
    <div>
        <div class="nav-bar px-5">
            <div class="d-flex justify-content-between align-items-center">
                <div class="logo">
                    <img class="w-100" src="../../public/img/netflix-logo.png" alt="">
                </div>
                <div class="search">
                    <div class="input-group m-3">
                        <input type="text" class="form-control" placeholder="Titoli, persone, generi" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="userInput" v-on:keyup.enter="startSearch">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="startSearch">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInput: "",
        }
    },
    methods: {
        startSearch() {
            this.$emit("searchTextChanged", this.userInput, 'movie')
            this.$emit("searchTextChanged", this.userInput, 'tv')
        }
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