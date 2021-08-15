import axios from 'axios'
import { UNSPLASH_ACCESS_KEY } from '@env'

axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.params = {}
axios.defaults.params['client_id'] = UNSPLASH_ACCESS_KEY

export const getPhoto = () => {
  return axios.get('/photos')
}

export const getRandomPhoto = () => {
  return axios.get('/photos/random')
}
