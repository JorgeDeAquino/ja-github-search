<template>
    <section class="container_RepositorioResultado">
      <div v-for="repo in repos" :key="repo.id">
        <CardResultado :nome="repo.name" :descricao="repo.description" :stars="repo.stargazers_count" :id="repo.id" />
      </div>
      <ButtonVerMais v-if="showMoreButton" @click="showMore" />
    </section>
  </template>
  
  <script>
  import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
  import CardResultado from '../../components/CardResultado/CardResultado.vue'
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'RepositorioResultado',
    components: {
      ButtonVerMais,
      CardResultado
    },
    computed: {
      ...mapState(['repos', 'page']),
      showMoreButton() {
        return !this.repos.length == 0 && this.repos.length >= 3
      }
    },
    methods: {
      ...mapActions(['GET_REPOS', 'PAGE_SET']),
      showMore() {
        this.PAGE_SET(this.page + 1)
        this.GET_REPOS()
      }
    },
  }
  </script>
  
  <style src="./styles.scss" lang="scss" scoped />