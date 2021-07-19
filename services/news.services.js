import { apiNews, firebaseURL } from './axiosInstance'

const API_KEY = process.env.NUXT_ENV_API_KEY

export const topHeadlines = async () => {
  let response = await apiNews.get(
    `/top-headlines?country=us&apiKey=${API_KEY}`
  )
  const top10Headlines = response.data.articles.slice(0, 10).map(article => {
    return article
  })

  return top10Headlines
}

export const fetchNews = async () => {
  let response = await firebaseURL.get('/posts.json')
  let posts = []
  for (const post in response.data) {
    posts.push({ ...response.data[post], id: post })
  }
  return posts
}
