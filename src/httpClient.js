import axios from 'axios'

const httpClient = (config) => {
  return axios.create(config)
}

export default httpClient