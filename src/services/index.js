import axios from '@/config/axios'
import { useModalStore } from '@/stores/modal/useModalStore'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export const useLoginSubmit = () => {
  const Error = ref('')
  const { t } = useI18n()
  const modalStore = useModalStore()

  const submit = async (values) => {
    try {
      const response = await axios.post('/login', values)
      localStorage.setItem('jwt_token', response.data?.access_token)
      Error.value = ''
      return response
    } catch (error) {
      modalStore.showErrorMessageModal = true
      Error.value = t('incorrect_credentials')
    }
  }

  return { submit, Error }
}

export const useForgorPasswordSubmit = () => {
  const modalStore = useModalStore()
  const Error = ref('')
  const { t } = useI18n()

  const submit = async (values) => {
    try {
      const response = await axios.post('/forgot-password', values)
      Error.value = ''
      console.log(response)
    } catch (error) {
      modalStore.showErrorMessageModal = true
      Error.value = t('incorrect_email')
    }
  }
  return {
    submit,
    Error
  }
}

export const useResetPasswordSubmit = () => {
  const { email, token } = useRoute().query

  const submit = async (values) => {
    try {
      values.email = email
      values.token = token
      const response = await axios.post('/reset-password', values)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return {
    submit
  }
}
