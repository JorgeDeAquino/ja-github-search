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
      page: 1
    }
  },
  mutations: {
    BUSCANDO_USERS(state, params) {
      state.users.push(...params)
    },
    USER_SELECIONADO(state, params) {
      state.user = params
    },
    BUSCANDO_REPOS(state, params) {
      state.repos.push(...params)
    },
    BUSCANDO_REPOS_DECRESCENTE(state, params) {
      state.repos.push(...params)
    },
    SET_TEXT(state, params) {
      state.text = params
    },
    TOGGLE_REPO_FAVORITOS(state, repo) {
      const index = state.favoritosRepos.findIndex(favorite => favorite.id === repo.id)
      if (index !== -1) {
        state.favoritosRepos.splice(index, 1)
      } else {
        state.favoritosRepos.push(repo)
      }
    },
    SET_PAGE(state, page) {
      state.page = page
    }
  },
  actions: {
    async GET_USERS({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${state.text}&page=${state.page}&per_page=3`
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
          `https://api.github.com/search/repositories?q=${state.text}&page=${state.page}&per_page=3`
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
          `https://api.github.com/users/${state.text}/repos?direction=desc&page=${state.page}&per_page=5`
        );
        commit('BUSCANDO_REPOS_DECRESCENTE', response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    PAGE_SET({ commit }, page) {
      commit('SET_PAGE', page)
    }
  },
  getters: {
    favoritosRepos: state => state.favoritosRepos,
    repos: state => state.repos
  }
})