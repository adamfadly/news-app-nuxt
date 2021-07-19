import axios from 'axios'

export const apiNews = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: ''
})

export const firebaseURL = axios.create({
  baseURL:
    'https://news-app-nuxt-80b8e-default-rtdb.asia-southeast1.firebasedatabase.app',
  headers: ''
})
