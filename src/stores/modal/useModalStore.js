import { defineStore } from 'pinia'
import {
  toggleShowLoginErrorMessageModal,
  toggleShowSuccessMessageModal,
  toggleShowForgotErrorMessageModal,
  toggleShowSuccessSentEmailModal
} from './actions'

export const useModalStore = defineStore('useModalStore', {
  state: () => ({
    showLoginErrorMessageModal: false,
    showLoginFormModal: false,
    showSuccessMessageModal: false,
    showPasswordErrorMessageModal: false,
    showSuccessSentEmailModal: false
  }),
  actions: {
    toggleShowLoginErrorMessageModal,
    toggleShowSuccessMessageModal,
    toggleShowForgotErrorMessageModal,
    toggleShowSuccessSentEmailModal
  }
})
