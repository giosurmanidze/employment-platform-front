import axios from '@/config/axios'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLoginSubmit = () => {
  const Error = ref('')
  const { t } = useI18n()

  const submit = async (values) => {
    console.log(values)
    try {
      const response = await axios.post('/login', values)
      localStorage.setItem('jwt_token', response.data?.access_token)
      Error.value = ''
      return response
    } catch (error) {
      Error.value = t('incorrect_credentials')
    }
  }

  return { submit, Error }
}
