<template>
    <section class="container_usuariosResultado">
            <div 
            @click="detailsUser(user.login)"
            v-for="(user) in users" :key="user.id"
            class="usuario_resultado" 
            >
                <img :src="user.avatar_url" :alt="user.name">
                <h2>{{ user.login }}</h2>
            </div>
        <ButtonVerMais v-if="showMoreButton" @click="showMore" />
    </section>
</template>

<script>
import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UsuariosResultado',
    components: {
        ButtonVerMais,
    },
    computed: {
        ...mapState([
            'users',
            'page'
        ]),
        showMoreButton() {
        return !this.users.length == 0 && this.users.length >= 3
      }
    },
    methods:{
        detailsUser(params){
            this.GET_USER(params)
            this.GET_REPOS_DESCENDING(params)
            .then(() =>{
                this.$router.push('/usuario-repositorios') 
            })  
        },
        ...mapActions([
            'GET_USER',
            'GET_REPOS_DESCENDING',
            'GET_USERS',
            'PAGE_SET',
        ]),
        showMore() {
        this.PAGE_SET(this.page + 1)
        this.GET_USERS()
      }
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />