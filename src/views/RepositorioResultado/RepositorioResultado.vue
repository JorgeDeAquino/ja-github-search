<template>
    <section class="container_RepositorioResultado">
        <div v-for="repo in repos" :key="repo.id" >
                <CardResultado 
                    :nome="repo.name"
                    :descricao="repo.description"
                    :stars="repo.stargazers_count"
                    :id="repo.id"
                />
            </div>
            <ButtonVerMais />
    </section>
</template>

<script>
import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import CardResultado from '../../components/CardResultado/CardResultado.vue'
import { mapState } from 'vuex'

export default {
    name: 'RepositorioResultado',
    components: {
        ButtonVerMais,
        CardResultado
    },
    computed: {
        ...mapState([
            'repos',
        ])
    },
    methods:{
        joaquim(){
            console.log(this.repos)
        }
        
    },
}
</script>

<style src="./styles.scss" lang="scss" scoped />