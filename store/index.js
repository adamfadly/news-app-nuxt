import vuex from 'vuex'


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
      async nuxtServerInit({commit}, { $axios }) {
        let news = await $axios.$get('/posts.json')
        let posts = []
        for (const post in news) {
          posts.push({...news[post], id: post})
          commit('SET_POST', posts)
        }
        return posts
      }
    }
  })
}





export default createStore
