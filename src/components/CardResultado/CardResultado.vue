<template>
    <div class="card">
        <div class="lista_title">
            <h2 class="titulo">{{ nome }}</h2>
            <button :class="{ 'favorite': isFavorite }" @click="favorite">
                <img v-if="!colorStar" class="star-icon" src="@/assets/images/star.svg" alt="star">
                <img v-else class="filled-star-icon" src="@/assets/images/starSelected.png" alt="filled-star">
            </button>
        </div>
        <p>{{ descricao }}</p>
        <img class="star_repositorios" src="@/assets/images/star.svg" alt="star"> <span>{{ stars }}</span>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'CardResultado',
    props: {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
        },
        stars: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        colorStar: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        ...mapGetters([
            'favoriteRepos',
        ]),
        ...mapState([
            'colorStar',
        ]),
        isFavorite() {
            return Array.isArray(this.favoritosRepos) && this.favoritosRepos.some(favorite => favorite.id === this.id)
        },
    },
    methods: {
        ...mapMutations([
            'TOGGLE_REPO_FAVORITOS',
            'TOGGLE_COLOR_STAR'
        ]),
        favorite() {
            let repo = {
                id: this.id,
                nome: this.nome,
                descricao: this.descricao,
                stars: this.stars,
                colorStar: !this.colorStar
            }
            this.TOGGLE_REPO_FAVORITOS(repo)
            this.TOGGLE_COLOR_STAR(!this.colorStar)
        },
    },
}
</script>

<style src="./styles.scss" lang="scss" scoped />