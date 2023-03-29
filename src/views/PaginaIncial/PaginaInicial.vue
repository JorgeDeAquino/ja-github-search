<template>
    <section class="container_PaginaInicial">
        <img src="../../assets/images/Logo-GitHub.svg" alt="Logo GitHub">
        <div class="btns">
            <button @click="[btnSelecao('btn1'), searchRepo]" class="btn_escolha" :class="{ btnSelecionado1 }">
                Repositório
            </button>
            <button @click="[btnSelecao('btn2'), searchUser]" class="btn_escolha" :class="{ btnSelecionado2 }">
                Usuário
            </button>
        </div>
        <div class="input_search">
            <input v-model="pesquisar" @keyup.enter="this.search" type="text" placeholder="Buscar...">
            <i></i>
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'PaginaInicial',
    data() {
        return {
            btnSelecionado1: false,
            btnSelecionado2: false,
            search: '',
        };
    },
    methods: {
        btnSelecao(select) {
            if (select == "btn1") {
                this.btnSelecionado1 = true;
                this.btnSelecionado2 = false;
                this.search = this.searchRepo;
            } else {
                this.btnSelecionado1 = false;
                this.btnSelecionado2 = true;
                this.search = this.searchUser;
            }
        },
        ...mapActions([
            'GET_USERS',
            'GET_REPOS',
        ]),
        ...mapMutations([
            'SET_TEXT',
        ]),
        searchUser() {
            this.GET_USERS()
                .then((data) => {
                    console.log(data)
                    this.$router.push({ name: 'usuarios-resultado' })
                })
        },
        searchRepo() {
            this.GET_REPOS()
                .then((data) => {
                    console.log(data)
                    this.$router.push({ name: 'repositorio-resultado' })
                })
        }
    },
    computed: {
        ...mapState([
            'text',
            'users',
            'repos',
        ]),
        pesquisar: {
            get() {
                return this.text
            },
            set(q) {
                this.SET_TEXT(q)
            }
        }
    },
    mounted() {
        this.SET_TEXT('')
    },

};
</script>

<style src="./styles.scss" lang="scss" scoped />