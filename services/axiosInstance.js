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

export const firebaseAUTH = axios.create({
  signUp: {
    baseURL: 'hhttps://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
  },
  signInEmailPassword: {
    baseURL:
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
  }
})
