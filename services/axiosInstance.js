import axios from 'axios'

export const apiNews = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: ''
})
