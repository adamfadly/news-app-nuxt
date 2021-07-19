import vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new vuex.Store({
    namespaced: true,

    state: {
      news: []
    },
    mutations: {
      SET_POST(state, news) {
        state.news = news
      }
    },
    getters: {},
    actions: {
      nuxtServerInit(vuexContext, context) {
        let fetchPost =
          'https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
        let news = axios
          .get(fetchPost)
          .then(response => {
            const posts = []
            for (const post in response.data) {
              posts.push({ ...response.data[post], id: post })
            }
            vuexContext.commit('SET_POST', posts)
          })
          .catch(e => context.error(e))
        return news
      }
    }
  })
}

export default createStore
