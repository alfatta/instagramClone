import axios from 'axios'
import { UNSPLASH_ACCESS_KEY } from '@env'

axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.params = {}
axios.defaults.params['client_id'] = UNSPLASH_ACCESS_KEY

export const getPhoto = (page = 1, per_page = 5) => {
  return axios.get('/photos', {
    params: {
      page,
      per_page,
    }
  })
}

export const getRandomPhoto = (count = 20) => {
  return axios.get('/photos/random', {
    params: {
      count,
    }
  })
}

export const searchPhoto = (query, page = 1, per_page = 15) => {
  return axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page,
    }
  })
}
