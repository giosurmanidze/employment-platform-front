import { defineStore } from 'pinia'
import { toggleShowErrorMessageModal } from './actions'

export const useModalStore = defineStore('useModalStore', {
  state: () => ({
    showErrorMessageModal: false
  }),
  actions: {
    toggleShowErrorMessageModal
  }
})
