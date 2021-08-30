import vuex from 'vuex'

const createStore = () => {
  return new vuex.Store({
    // namespaced: true,

    state: {
      news: [],
      token: null
    },

    mutations: {
      SET_POST(state, news) {
        state.news = news
      },
      addNewPost(state, news) {
        state.news.push(news)
      },
      setToken(state, token) {
        state.token = token
      }
    },

    getters: {
      isAuntheticated(state) {
        return state.token != null
      }
    },

    actions: {
      async nuxtServerInit({ commit }, { $axios }) {
        let news = await $axios.$get('/posts.json')
        let posts = []
        for (const post in news) {
          posts.push({ ...news[post], id: post })
          commit('SET_POST', posts)
        }
        return posts
      },

      async getContent({ dispatch }) {
        await dispatch(nuxtServerInit)
      }
    }
  })
}

export default createStore
