<template>
    <section class="container_UsuarioDetalhe">
        <div class="usuario_card">
            <img :src="user.avatar_url" :alt="user.name">
            <div class="usuario_infos">
                <h2>{{ user.name }}</h2>
                <h3>{{ user.login }}</h3>
                <ul>
                    <li v-if="user.company">
                        <img src="@/assets/images/organization.svg" alt="icone">
                        <span>
                            {{ user.company }}
                        </span>
                    </li>
                    <li v-if="user.location">
                        <img src="@/assets/images/location.svg" alt="icone">
                        <span>
                            {{ user.location }}
                        </span>
                    </li>
                    <li v-if="user.public_repos">
                        <img src="@/assets/images/repository.svg" alt="icone">
                        <span>
                            {{ user.public_repos }}
                        </span>
                    </li>
                    <li v-if="user.followers">
                        <img src="@/assets/images/followers.svg" alt="icone">
                        <span>
                            {{ user.followers }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="lista_repositorios">
            <div v-for="repo in repos" :key="repo.id">
                <CardResultado :nome="repo.name" :descricao="repo.description" :stars="repo.stargazers_count"
                    :id="repo.id" :starColor="false" />
            </div>
            <ButtonVerMais v-if="showMoreButton" @click="showMore" />
        </div>
    </section>
</template>

<script>
import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import CardResultado from '../../components/CardResultado/CardResultado.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UsuarioRepositorios',
    components: {
        ButtonVerMais,
        CardResultado
    },
    computed: {
        ...mapState([
            'user',
            'repos',
            'page'
        ]),
        showMoreButton() {
            return !this.repos.length == 0 && this.repos.length >= 3
        }
    },
    methods: {
        ...mapActions([
            'GET_REPOS_DESCENDING',
            'PAGE_SET',
        ]),
        showMore() {
            this.PAGE_SET(this.page + 1)
            this.GET_REPOS_DESCENDING()
        }
    },

}
</script>

<style src="./styles.scss" lang="scss" scoped />