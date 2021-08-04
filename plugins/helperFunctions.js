import Vue from 'vue'

const dateModel = value => {
  return formatDate(value)
}

const formatDate = date => {
  let d = new Date(date)
  let month = d.getMonth()
  let year = d.getFullYear()
  let day = d.getDay()

  let result = [year, month, day].join('-')

  return result
}

Vue.filter('date', dateModel)
