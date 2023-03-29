import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      users: [],
      user: [],
      repos: [],
      favoritosRepos: [],
      text: '',
    }
  },
  mutations: {
    BUSCANDO_USERS(state, params) {
      state.users = params
    },
    USER_SELECIONADO(state, params) {
      state.user = params
    },
    BUSCANDO_REPOS(state, params) {
      state.repos = params
    },
    BUSCANDO_REPOS_DECRESCENTE(state, params) {
      state.repos = params
    },
    SET_TEXT(state, params) {
      state.text = params
    },
    ADD_REPO_FAVORITOS(state, repo) {
      state.favoritosRepos.push(repo)
    },
    REMOVER_REPO_FAVORITOS(state, repoId) {
      const index = state.favoritosRepos.findIndex(repo => repo.id === repoId)
      if (index !== -1) {
        state.favoritosRepos.splice(index, 1)
      }
    }
  },
  actions: {
    async GET_USERS({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${state.text}&page=1`
        );
        commit('BUSCANDO_USERS', response.data.items);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async GET_USER({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${state.text}`
        );
        commit('USER_SELECIONADO', response.data);
        console.log(response.data)
        console.log(this.user)
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async GET_REPOS({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${state.text}&page=1`
        );
        commit('BUSCANDO_REPOS', response.data.items);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async GET_REPOS_DESCENDING({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${state.text}/repos?direction=desc`
        );
        commit('BUSCANDO_REPOS_DECRESCENTE', response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    favoritosRepos: state => state.favoritosRepos
  }

})