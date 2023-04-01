<template>
    <section class="container_favoritos">
        <div class="title">
            <img src="../../assets/images/Logo-GitHub.svg" alt="Logo GitHub">
            <h2>Repositórios Favoritos</h2>
        </div>
        <div v-if="favoritosRepos.length === 0">
            <h2>Ainda sem repositorios favoritos</h2>
        </div>
        <div v-else class="container_cards">
            <div v-for="repo in favoritosRepos" :key="repo.id">
                <CardResultado :nome="repo.nome" :descricao="repo.descricao" :stars="repo.stars" :id="repo.id" :starColor="repo.starColor"/>
            </div>
            <ButtonVerMais v-if="showMoreButton" @click="showMore"/>
        </div>
    </section>
</template>

<script>

import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import CardResultado from '../../components/CardResultado/CardResultado.vue'
import { mapGetters } from 'vuex'


export default {
    name: 'FavoritosPagina',
    components: {
        ButtonVerMais,
        CardResultado,
    },
    computed: {
        ...mapGetters([
            'favoritosRepos'
        ]),
        showMoreButton() {
        return !this.favoritosRepos.length == 0 && this.favoritosRepos.length >= 3
      }
    },
    methods: {
      showMore() {
        this.PAGE_SET(this.page + 1)
      }
    },
}
</script>

<style src="./styles.scss" lang="scss" scoped />