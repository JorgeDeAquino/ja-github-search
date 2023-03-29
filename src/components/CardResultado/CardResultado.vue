<template>
    <div class="card">
        <div class="lista_title">
            <h2 class="titulo">{{ nome }}</h2>
            <button :class="{ 'favorite': isFavorite }" @click="favorite"><img
                    src="@/assets/images/star.svg" alt="star"></button>
        </div>
        <p>{{ descricao }}</p>
        <img class="star_repositorios" src="@/assets/images/star.svg" alt="star"> <span>{{ stars }}</span>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
        }
    },
    computed: {
        ...mapGetters([
            'favoriteRepos'
        ]),
        isFavorite() {
            return Array.isArray(this.favoritosRepos) && this.favoritosRepos.some(favorite => favorite.id === this.id)
        }
    },
    methods: {
        ...mapMutations([
            'TOGGLE_REPO_FAVORITOS'
        ]),
        favorite() {
            let repo = {
                id: this.id,
                nome: this.nome,
                descricao: this.descricao,
                stars: this.stars,
            }
            this.TOGGLE_REPO_FAVORITOS(repo)

        }
    },
}
</script>

<style src="./styles.scss" lang="scss" scoped />