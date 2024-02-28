import axios from '@/config/axios'
import { useModalStore } from '@/stores/modal/useModalStore'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export const useLoginSubmit = () => {
  const Error = ref('')
  const { t } = useI18n()
  const modalStore = useModalStore()

  const submit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('/login', values)
      localStorage.setItem('jwt_token', response.data?.access_token)
      modalStore.showLoginErrorMessageModal = false
      resetForm()
      Error.value = ''
      return response
    } catch (error) {
      modalStore.showLoginErrorMessageModal = true
      Error.value = t('incorrect_credentials')
    }
  }

  return { submit, Error }
}

export const useForgorPasswordSubmit = () => {
  const modalStore = useModalStore()
  const Error = ref('')
  const Success = ref('')
  const { t } = useI18n()

  const submit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('/forgot-password', values)
      Error.value = ''
      modalStore.showSuccessMessageModal = true
      Success.value = t('check_email')
      resetForm()
      return response
    } catch (error) {
      modalStore.showPasswordErrorMessageModal = true
      Error.value = t('incorrect_email')
    }
  }
  return {
    submit,
    Error,
    Success
  }
}

export const useResetPasswordSubmit = () => {
  const { email, token } = useRoute().query

  const submit = async (values, { resetForm }) => {
    try {
      values.email = email
      values.token = token
      const response = await axios.post('/reset-password', values)
      resetForm()
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return {
    submit
  }
}

export const useRegisterSubmit = () => {
  const modalStore = useModalStore()

  const submit = async (values, { resetForm, setFieldError }) => {
    try {
      const response = await axios.post('/register', values)
      modalStore.showSuccessSentEmailModal = true
      resetForm()
      return response
    } catch (error) {
      setFieldError('email', error.response.data.errors.email[0])
    }
  }

  return {
    submit
  }
}
