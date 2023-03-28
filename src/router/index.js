import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from './views/PaginaIncial/PaginaInicial.vue'
import FavoritosPagina from './views/Favoritos/FavoritosPagina.vue'
import RepositorioResultado from './views/RepositorioResultado/RepositorioResultado.vue'
import ResultadoNaoEncontrado from './views/ResultadoNaoEncontrado/ResultadoNaoEncontrado.vue'
import PaginaNaoEncontrada from './views/PaginaNaoEncontrada/PaginaNaoEncontrada.vue'
import UsuarioRepositorios from './views/UsuarioRepositorios/UsuarioRepositorios.vue'
import UsuariosResultado from './views/UsuariosResultado/UsuariosResultado.vue'

const routes = [
    {
        name: 'PaginaInicial',
        path: '/',
        component: PaginaInicial
    },
    {
        name: 'favoritos',
        path: '/favoritos',
        component: FavoritosPagina
    },
    {
        name: 'repositorio-resultado',
        path: '/repositorio-resultado',
        component: RepositorioResultado
    },
    {
        name: 'usuario-repositorios',
        path: '/usuario-repositorios',
        component: UsuarioRepositorios
    },
    {
        name: 'usuarios-resultado',
        path: '/usuarios-resultado',
        component: UsuariosResultado,
        props: true
    },
    {
        name: 'resultado-nao-encontrado',
        path: '/resultado-nao-encontrado',
        component: ResultadoNaoEncontrado
    },
    {
        name: 'pagina-nao-encontrada',
        path: '/:pathMatch(.*)*',
        component: PaginaNaoEncontrada
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router