import { defineStore } from 'pinia'
import {
  toggleShowLoginErrorMessageModal,
  toggleShowSuccessMessageModal,
  toggleShowForgotErrorMessageModal
} from './actions'

export const useModalStore = defineStore('useModalStore', {
  state: () => ({
    showLoginErrorMessageModal: false,
    showLoginFormModal: false,
    showSuccessMessageModal: false,
    showPasswordErrorMessageModal: false
  }),
  actions: {
    toggleShowLoginErrorMessageModal,
    toggleShowSuccessMessageModal,
    toggleShowForgotErrorMessageModal
  },
})
