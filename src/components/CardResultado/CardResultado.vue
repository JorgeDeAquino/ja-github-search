<template>
    <div class="card">
        <div class="lista_title">
            <h2 class="titulo">{{ nome }}</h2>
            <button @click="favorite">
                <img v-if="!colorStar" class="star-icon" src="@/assets/images/star.svg" alt="star">
                <img v-else class="filled-star-icon" src="@/assets/images/starSelected.png" alt="filled-star">
            </button>
        </div>
        <p>{{ descricao }}</p>
        <img class="star_repositorios" src="@/assets/images/star.svg" alt="star"> <span>{{ stars }}</span>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'CardResultado',
    data() {
        return {
            colorStar: null,
        };
    },
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
        },
        id: {
            type: Number,
            required: true
        },
        starColor: {
            type: Boolean,
            required: true
        },
    },
    computed: {
        ...mapGetters([
            'favoriteRepos',
        ]),
    },
    methods: {
        ...mapMutations([
            'TOGGLE_REPO_FAVORITOS',
        ]),
        favorite() {
            let repo = {
                id: this.id,
                nome: this.nome,
                descricao: this.descricao,
                stars: this.stars,
                starColor: this.colorStar,
            }
            this.TOGGLE_REPO_FAVORITOS(repo)
            this.toggleColorStar()
        },
        toggleColorStar() {
            return this.colorStar = !this.colorStar
        }
    },
}
</script>

<style src="./styles.scss" lang="scss" scoped />