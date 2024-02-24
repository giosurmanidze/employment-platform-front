import axios from '@/config/axios'

export const useLoginSubmit = () => {
  const submit = async (values) => {
    console.log(values)
    try {
      const response = await axios.post('/login', values)
      localStorage.setItem('jwt_token', response.data?.access_token)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return { submit }
}
