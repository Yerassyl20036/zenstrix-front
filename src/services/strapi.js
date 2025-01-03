import axios from 'axios'

const strapiAPI = axios.create({
  baseURL: 'http://localhost:1337/api'  // or your Strapi URL
})

export const fetchContent = async () => {
  const response = await strapiAPI.get('/your-content-type')
  return response.data
}
